import React from "react";
import store from "../store/store";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "../container/LandingPage";
import Dashboard from "../container/Dashboard";
import CounterWidget from "../container/CounterWidget";

export const routing = (
  <Provider store={store}>
    <Router>
      <Route path="/home" component={LandingPage} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/counterwidget" component={CounterWidget} />
    </Router>
  </Provider>
);
