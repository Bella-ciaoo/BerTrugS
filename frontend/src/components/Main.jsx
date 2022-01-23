import React from "react";
import img from "./images/Logo.svg";
import { Link } from "react-router-dom";
import "./Main.css";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import { useState, useEffect, useRef } from "react";
import FeatherIcon from "feather-icons-react";
import axios from "axios";

const Main = () => {
  const [data, setData] = useState([]);
  const [percentage, setPercentage] = useState(0);
  let idRef = useRef();
  let handleSubmit = async (e) => {
    let id = idRef.current.value;
    console.log(id);
    e.preventDefault();
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
    };
    await axios
      .post("https://betrugz.azurewebsites.net/", {
        id: id,
      })
      .then((res) => {
        setPercentage(res.data.probability);
        setData(res.data.other_details);
      });

    console.log(data);
  };

  const props = {
    percent: percentage,
    colorSlice: "#00a1ff",
    fontColor: "#365b74",
    fontSize: "1.6rem",
    fontWeight: 400,
    size: 160,
    stroke: 10,
    strokeBottom: 5,
    speed: 60,
    cut: 0,
    rotation: -90,
    opacity: 10,
    fill: "#00897B",
    unit: "%",
    textPosition: "0.35em",
    animationOff: false,
    inverse: false,
    round: true,
    number: true,
    linearGradient: ["#52BBA5", "#00897B"],
  };

  const [fraud, setFraud] = useState("");
  const [safe, setSafe] = useState("");
  const [icon, setIcon] = useState("");
  const [color, setColor] = useState("green");
  const [loading, setLoading] = useState("");

  useEffect(() => {
    if (props.percent >= 50) {
      setFraud("Fraud detected");
      setSafe("Unsafe");
      setColor("red");
      setIcon("x-circle");
    } else {
      setFraud("No fraud detected");
      setSafe("Safe");
      setColor("green");
      setIcon("check-circle");
    }
  }, [props.percent]);

  useEffect(() => {
    if (data === undefined) {
      setLoading("Loading...");
    }
  }, [data]);

  return (
    <div>
      <div className="main">
        <div className="container">
          <div className="navbar">
            <div className="navbar-logo">
              <img src={img} alt="logo" />
            </div>
            <div className="navbar-links">
              <Link to="/">Home</Link>
              {"  "}
              {/* <Link to="/aboutus">About Us</Link>
              {"  "} */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="transaction">
                <h1 className="heading">
                  <span>Enter the Transaction id</span>
                </h1>
                <br />
                <div className="input">
                  <form action="">
                    <input
                      ref={idRef}
                      type="text"
                      placeholder="Enter the transaction id"
                    />{" "}
                    <button
                      className="button submit"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      <span>Submit</span>
                    </button>
                  </form>
                </div>
                <br />
              </div>
              <div className="fetched">
                <h2 className="fetched-title">
                  <span>Transaction Details</span>
                </h2>
                <div className=" output_fields">
                  <div className="container">
                    <div className="row">
                      {data.map((item) => (
                        <div className="col">
                          <div className="card">
                            <div className="card-body">{item}</div>
                          </div>
                          <br />
                        </div>
                      ))}
                      <br />
                      <div className="w-100">
                        {" "}
                        <br />
                      </div>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
              <div className="container" style={{ alignItems: "center" }}>
                <div className="chart">
                  <div className="fraud">
                    <h5 className="fraud-title">
                      <FeatherIcon icon={icon} size="30" color={color} />
                      <br />
                      {fraud}
                    </h5>
                  </div>
                  <br />
                  <div className="container inner-content">
                    <div className="row ">
                      <div
                        className="col "
                        style={{ width: "200px", textAlign: "center" }}
                      >
                        <h3>{safe}</h3>
                        <h4>Confidence:</h4>
                      </div>
                    </div>
                    <CircularProgressBar {...props} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
