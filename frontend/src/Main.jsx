import React from "react";
import img from "./images/Logo.svg";
import { Link } from "react-router-dom";
import "./Main.css";

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
                <div className="output_fields">
                  <div className="card">
                    <div className="card-body">
                        details 1
                    </div>
                  </div>
                  <br/>
                  <div className="card">
                    <div className="card-body">
                        details 1
                    </div>
                  </div>
                  <br/>
                  <div className="card">
                    <div className="card-body">
                        details 1
                    </div>
                  </div>
                  <br/>
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
