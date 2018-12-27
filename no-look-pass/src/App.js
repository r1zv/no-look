import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/home.component";
import About from "./components/about.component";
import Email from "./components/email.component";

import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://nolook.us" target="_blank">
              <img src={logo} width="30" height="30" alt="nolook.us" />
            </a>
            <Link to="/" className="navbar-brand">home</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/about" className="nav-link">about</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/email" className="nav-link">email</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/email" component={Email} />
        </div>
      </Router>
    );
  }
}
export default App;
