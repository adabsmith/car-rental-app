import React from "react";
import { Route, Routes } from "react-router-dom";
import CarList from "./carList";
import {Team} from "./Team";
import App from "./App";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Team" element={<Team />} />
      <Route path="/carList" element={<CarList />} />
    </Routes>
  );
};

export default Router;