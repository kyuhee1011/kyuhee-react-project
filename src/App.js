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
  const [favorites, setFavorites] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/desserts")
      .then((r) => r.json())
      .then((desserts) => {
        console.log(desserts);
        setDessert(desserts);
      });
  }, []);

  const onMyFavList = (favoritesDessert) => {
    const updateMyList = desserts.map(
      (desserts) => desserts.id === favoritesDessert
    );
    setDessert(updateMyList);
  };

  const handleMyFav = () => {
    setFavorites((favorites) => !favorites);
  };

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
          <AddForm onAddMyFav={onMyFavList} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
