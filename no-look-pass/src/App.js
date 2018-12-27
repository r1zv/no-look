import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
    	<Router>
		<Route path="/" exact component={home} />
		<Route path="/about" component={about} />
		<Route path="/email" component={email} />    	
    	<div ClassName="container">
       		<h2>N O  L O O K</h2>
      	</div>
      	</Router>
    );
  }
}

export default App;
