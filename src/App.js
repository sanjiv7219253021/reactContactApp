import React from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import { Switch, Route } from "react-router";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/add">
          <AddContact />
        </Route>

        <Route path="/edit/:id">
          <EditContact />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
