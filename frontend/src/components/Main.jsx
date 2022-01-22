import React from "react";
import img from "./images/Logo.svg";
import { Link } from "react-router-dom";
import "./Main.css";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";

const props = {
  percent: 90, 
  colorSlice: "#00a1ff",
  fontColor: "#365b74",
  fontSize: "1.6rem",
  fontWeight: 400,
  size: 200,
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
  round: false,
  number: true,
  linearGradient: ["#52BBA5", "#00897B"],
};

const Main = () => {
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
              <Link to="/about">About Us</Link>
              {"  "}
              <Link to="/howitworks">How it works</Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="transaction">
                <h1 className="heading">
                  <span>Heading</span>
                </h1>
                <br />
                <div className="input">
                  <form action="">
                    <input type="text" placeholder="Enter the transaction id" />{" "}
                    <button className="button submit" type="submit">
                      <span>Submit</span>
                    </button>
                  </form>
                </div>
                <br />
              </div>
              <div className="fetched">
                <h2>
                  <span>Fetched Details</span>
                </h2>
                <div className=" output_fields">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="card">
                          <div className="card-body">Field 1</div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card">
                          <div className="card-body">Field 1</div>
                        </div>
                      </div>
                      <br />
                      <div className="w-100">
                        {" "}
                        <br />
                      </div>
                      <div className="col">
                        <div className="card">
                          <div className="card-body">Field 1</div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card">
                          <div className="card-body">Field 1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chart">
                <div className="container">
                  <CircularProgressBar {...props} />
                  <div className="row">
                    <div className="col" style={{ width: "200px" }}>
                      Content to be displayed Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                    </div>
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
