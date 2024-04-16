import React from "react";
import { Route, Switch } from "react-router-dom";
import CarList from "./carList";
import {Team} from "./Team";
import App from "./App";
import CarPage from "./carPage";

const Router = () => {
  return (
    <Switch>
      <Route path="/" element={<App />} />
      <Route path="/Team" element={<Team />} />
      <Route path="/carPage" element={<CarPage />} />
    </Switch>
  );
};

export default Router;