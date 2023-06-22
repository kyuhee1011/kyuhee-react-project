import React from "react";
import { useState, useEffect } from "react";
// import DessertList from "./DessertList";

//Dessert Page

function DessertContainer() {
  const [desserts, setDesserts] = useState([]);
  const [favorites, setFavorites] = useState(false);
  const [searchSweet, setSearchSweet] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/desserts")
      .then((r) => r.json())
      .then((desserts) => {
        console.log("Sweety sugar Dessert loaded");
        setDesserts(desserts);
      });
  }, []);

  const dessertsFavList = () => {};

  const handleMyFavDessert = () => {
    setFavorites((favorites) => !favorites);
  };

  const onMyFavTask = (myFavorite) => {
    const addMyFav = desserts.map((desserts) =>
      desserts.id === myFavorite.id ? myFavorite : desserts
    );
    setFavorites(addMyFav);
  };

  //   const itemsToDisplay = items.filter((item) => {
  //     if (selectedCategory === "All") return true;

  //     return item.category === selectedCategory;
  //   });

  return (
    <DessertList
      desserts={dessertsFavList}
      searchSweet={searchSweet}
      favorites={favorites}
      onMyFavorClick={handleMyFavDessert}
      onFavoriteDessert={onMyFavTask}
    />
  );
}

export default DessertContainer;
