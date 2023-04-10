import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllRoutesProject from "./config/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {AllRoutesProject.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component />
              </route.layout>
            }
          ></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}
export default App;