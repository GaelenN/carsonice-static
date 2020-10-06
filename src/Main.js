import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Rules from "./pages/Rules";
import Information from "./pages/Information";
import logo from "./img/cars-colour.svg";
import altWhite from "./img/cars-white-alt.svg";

class Main extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
          <div className="container d-flex justify-content-between align-items-center py-3">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink className="logo" to="/">
            <img src={logo} alt="logo" width="200" height="50"/>
          </NavLink>
          <div id="navbarSupportedContent">
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">Register</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/rules">Rules</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/information">Information</NavLink>
                </li>
              </ul>
          </div>
          </div>
        </nav>
      <div className="container">      
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/information" component={Information}/>
          <Route path="/register" component={Register}/>
          <Route path="/rules" component={Rules}/>
        </div>
      </div>
      <footer className="bg-dark mt-5">
        <div className="container d-flex justify-content-between align-items-center py-3">
          <NavLink className="logo" to="/">
            <img src={altWhite} alt="logo" width="100" height="100"/>
          </NavLink>
        </div>
      </footer>
      </Router>
      );
    }
  }
  
  export default Main;