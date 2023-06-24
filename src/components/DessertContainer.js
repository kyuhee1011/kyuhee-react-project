import React from "react";
// import { useState, useEffect } from "react";
import DessertCard from "./DessertCard";
import { CardGroup } from "react-bootstrap";
// import AddForm from "./AddForm";

//Dessert Page

function DessertContainer({ desserts, onMyFavList }) {
  const dessertArray = desserts.map((dessert) => {
    return (
      <DessertCard
        key={dessert.id}
        dessert={dessert}
        onMyFavList={onMyFavList}
      />
    );
  });
  //   const [desserts, setDesserts] = useState([]);
  //   const [favorites, setFavorites] = useState(false);
  //   //   const [searchSweet, setSearchSweet] = useState("");

  //   const onMyFavDessert = () => {
  //     setFavorites((favorites) => !favorites);
  //   };

  //   const onSearchDessert = () => {
  //     setSearchSweet(searchSweet);
  //   };

  //const searchTerm=me-2.value.toLowerCase();

  //   const dessertToDisplay = desserts
  //     if (favorite) {dessertToDisplay= favorite.filter ((desserts) =>dessert.favorite)
  //  }

  //  if (searchSweet) {dessertToDisplay = dessert.name.fitler ((name)=>name.toLowerCase().includes (searchTerm))}

  return <CardGroup>{dessertArray}</CardGroup>;
}

export default DessertContainer;
