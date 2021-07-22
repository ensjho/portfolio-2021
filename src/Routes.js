import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
    </Switch>
  );
}

export default Routes;
