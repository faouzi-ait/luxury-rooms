import React from "react";
import Home from "../home/Home";
import Rooms from "../rooms/Rooms";
import Room from "../room/Room";
import Navbar from "../navbar/Navbar";
import Error from "../error/Error";
import { DataProvider } from "../../state_managment/context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

const App = _ => {
  return (
    <DataProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/room/:id" component={Room} />
          <Route component={Error} />
        </Switch>
      </Router>
    </DataProvider>
  );
};

export default App;
