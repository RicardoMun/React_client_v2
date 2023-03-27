import "./App.scss";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllRoutes from "./config/routes";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {AllRoutes.map((index, route) => {
          <Route 
            Key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component>
                </route.component>
              </route.layout>}>
          </Route>
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
