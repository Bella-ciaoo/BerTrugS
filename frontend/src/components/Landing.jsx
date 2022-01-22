import React from "react";
import "./Landing.css";
import img from "./images/Logo.svg";
import Typical from "react-typical";
import img1 from "./images/landing_img.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div className="landing">
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
              <div className="description">
                <h1 className="title">
                  <span>BeTrugs</span>
                </h1>
                <p1 className="subtitle">
                  <span>
                    <Typical
                      steps={[
                        "Detect Frauds",
                        1200,
                        "Keep transactions safe",
                        1200,
                        "Maintain your trust",
                        1200,
                      ]}
                      loop={Infinity}
                    />
                  </span>
                </p1>
              </div>
              <div className="get_started">
                <Link to="/main">
                  <button className="button" >
                    <span>Get started</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image">
                <img
                  src={img1}
                  alt="logo"
                  className="img-fluid"
                  style={{ height: "450px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
