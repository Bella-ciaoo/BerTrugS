from flask import Flask, render_template, request
import xgboost as xgb
import numpy as np

app = Flask(__name__)

classifier = xgb.Booster()
classifier.load_model("./final_model_5.bin")



def funcfunc(step, type, amount,oldbalanceOrg,newbalanceOrig,oldbalanceDest,newbalanceDest):
   #preprocesses the data -> function used internally inside the predict function
    if type=="TRANSFER" or type=="CASH_OUT":
        if type=="TRANSFER" :
            type=0
        else:
            type=1
        if oldbalanceDest==0 & newbalanceDest == 0 & amount!=0:
            oldbalanceDest=-1
            newbalanceDest=-1
        if oldbalanceOrg==0 & newbalanceOrig == 0 & amount!=0:
            oldbalanceOrg=np.nan
            newbalanceOrig=np.nan
        errorbalanceDest=oldbalanceDest+amount-newbalanceDest
        errorbalanceOrig=newbalanceOrig+amount-oldbalanceOrg

        return [step,type,amount,oldbalanceOrg,newbalanceOrig,oldbalanceDest,newbalanceDest,errorbalanceDest,errorbalanceOrig]

def get_list(idinp):
    idinp = request.args.get('id')
    df=pd.read_csv("dataframe.csv")

    listlist=df[df['nameOrig']==idinp].values.tolist()[0]

    return listlist
    #array([1])

def predict(idinp):
    
    listlist =get_list(idinp)
    # func func converts the list to our specified way for the model
    listlist2=funcfunc(listlist[0],listlist[1],listlist[2],listlist[4],listlist[5],listlist[7],listlist[8])
    onerow = pd.DataFrame({'step': [listlist2[0]], 'type': [listlist2[1]], 'amount': [listlist2[2]], 'oldbalanceOrg': [listlist2[3]]
                       , 'newbalanceOrig': [listlist2[4]], 'oldbalanceDest': [listlist2[5]], 'newbalanceDest': [listlist2[6]], 'errorbalanceDest': [listlist2[7]]
                       , 'errorbalanceOrig': [listlist2[8]]})
    
    prediction_list =  classifier.predict_proba(onerow).values.to_list()
    fraud_probability=prediction_list[1]
    not_fraud_probability=prediction_list[0]
    ans=np.argmax(prediction_list)
    if ans == 0:
        return ans,not_fraud_probability
    else:
        return ans,fraud_probability
    

@app.route('/',methods=['POST'])
def Home():
    data = request.json
    response=dict()
    # response : 1) list of other attributes -> get_list(id)
    other_details=get_list(data['id'])
    response['other_details']=other_details
    #            2) prediction -> predict(id)
    prediction=predict(data['id'])

    response['prediction']=prediction[0]
    response['probability']=prediction[1]
    print(response)
    
    return response

if __name__=="__main__":
    app.run()