import React from "react";
import { render } from "react-dom";
import { Router, Route, hashHistory } from "react-router";
import App from "./App";
import About from "./About";
import Repos from "./Repos";
import Counter from "./Counter";
require("./App.js");

render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    {/* add the routes here */}
    <Route path="/counter" component={Counter} />
    <Route path="/repos" component={Repos} />
    <Route path="/about" component={About} />
  </Router>,
  document.getElementById("app")
);
