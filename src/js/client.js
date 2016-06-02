import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Favorites from "./pages/Favorites";
import Todos from "./pages/Todos";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import List from "./pages/List";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path=":menu/list" component={List}></Route>
    </Route>
  </Router>,
app);
