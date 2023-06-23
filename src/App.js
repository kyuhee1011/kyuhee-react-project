import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import DessertContainer from "./components/DessertContainer";
import AddForm from "./components/AddForm";
import NavBar from "./components/NavBar";
import DessertPop from "./components/DessertPop";
// import DessertList from "./components/DessertList";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/desserts">
          <DessertContainer />
        </Route>
        <Route exact path="/new">
          <DessertPop />
        </Route>
        <Route exact path="/addForm">
          <AddForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
