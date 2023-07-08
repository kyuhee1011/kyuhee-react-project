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
  const [searchSubmit, setSearchSubmit] = useState("");
  console.log(searchSubmit);
  const searchTask = desserts.filter((element) => {
    return element.name.toLowerCase().includes(searchSubmit);
  });
  console.log(searchTask);
  //simple GET method using useEffect hook
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
    <div className="app">
      <NavBar searchSubmit={searchSubmit} setSearchSubmit={setSearchSubmit} />
      <Switch>
        <Route exact path="/">
          <Home desserts={desserts} />
        </Route>
        <Route exact path="/desserts">
          {/* control component (onMyFavList) recieves its update callback via props */}
          <DessertContainer desserts={searchTask} onMyFavList={onMyFavList} />
        </Route>
        <Route exact path="/new">
          <DessertPop desserts={searchTask} onMyFavList={onMyFavList} />
        </Route>
        <Route exact path="/addForm">
          <AddForm
            //pass props to AddForm component
            desserts={desserts}
            setDessert={setDessert}
            onAddMyFav={onMyFavList}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
