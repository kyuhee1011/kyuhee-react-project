import React from "react";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import DessertContainer from "./components//DessertContainer/DessertContainer";
import AddForm from "./components/AddForm/AddForm";
import NavBar from "./components/NavBar/NavBar";
import DessertPop from "./components/DessertPop/DessertPop";

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

  const onMyFavList = (favoritesDessert) => {
    const updateMyList = desserts.map((desserts) => {
      if (desserts.id === favoritesDessert.id) {
        return favoritesDessert;
      } else {
        return desserts;
      }
    });
    setDessert(updateMyList);
  };
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home desserts={desserts} />
        </Route>
        <Route exact path="/desserts">
          <DessertContainer desserts={desserts} onMyFavList={onMyFavList} />
        </Route>
        <Route exact path="/new">
          <DessertPop desserts={desserts} onMyFavList={onMyFavList} />
        </Route>
        <Route exact path="/addForm">
          <AddForm onAddMyFav={onMyFavList} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
