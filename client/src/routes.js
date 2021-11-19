import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/home/HomeScreen";
import LoginScreen from "./screens/auth/login/LoginScreen";
import SignupScreen from "./screens/auth/signup/SignupScreen";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/c/:chatId" exact component={HomeScreen} />
          <Route path="/login" exact component={LoginScreen} />
          <Route path="/signup" exact component={SignupScreen} />
        </Switch>
      </Router>
    );
  }
}
