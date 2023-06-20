import React from "react";
import { Route, Switch } from "react-router-dom";
import Food from "./components/Food";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/food">
          <Food />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
