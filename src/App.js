import "./App.scss";
import React from "react";
import { AdminHome } from "./pages/admin/AdminHome";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="styles">
      <React.Fragment></React.Fragment>
      <AdminHome></AdminHome>
      <Contact></Contact>
      <Home></Home>
    </div>
  );
}

export default App;
