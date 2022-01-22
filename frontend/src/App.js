import Landing from "./components/Landing";
import Main from "./components/Main";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/main" component={Main}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
