import React from "react";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./components/Home";
import DessertContainer from "./components/DessertContainer";
import AddForm from "./components/AddForm";
import NavBar from "./components/NavBar";
import DessertPop from "./components/DessertPop";

function App() {
  const [desserts, setDessert] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/desserts")
      .then((r) => r.json())
      .then((desserts) => {
        console.log(desserts);
        setDessert(desserts);
      });
  }, []);
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home desserts={desserts} />
        </Route>
        <Route exact path="/desserts">
          <DessertContainer desserts={desserts} />
        </Route>
        <Route exact path="/new">
          <DessertPop desserts={desserts} />
        </Route>
        <Route exact path="/addForm">
          <AddForm desserts={desserts} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
