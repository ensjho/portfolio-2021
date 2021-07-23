import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import ErrorPage from "./Components/ErrorPage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/main" component={MainPage} />
      <Route exact path="/" component={ErrorPage} />
    </Switch>
  );
}

export default Routes;
