import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import DessertContainer from "./components/DessertContainer";
// import AddForm from "./components/AddForm";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/desserts">
          <DessertContainer />
        </Route>
        {/* <Route path="/form">
          <AddForm />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
