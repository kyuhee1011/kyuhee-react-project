import React from "react";
// import { useState, useEffect } from "react";
import DessertCard from "./DessertCard";
import { CardGroup } from "react-bootstrap";
// import AddForm from "./AddForm";

//Dessert Page

function DessertContainer({ desserts }) {
  //   const [desserts, setDesserts] = useState([]);
  //   const [favorites, setFavorites] = useState(false);
  //   //   const [searchSweet, setSearchSweet] = useState("");

  //   useEffect(() => {
  //     fetch("http://localhost:3000/desserts")
  //       .then((r) => r.json())
  //       .then((desserts) => {
  //         setDesserts(desserts);
  //       });
  //   }, []);

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

  return (
    <CardGroup>
      {desserts.map((dessert) => (
        <DessertCard key={dessert.id} dessert={dessert} />
      ))}
    </CardGroup>
  );

  //   const onMyFavTask = (myFavorite) => {
  //     const addMyFav = desserts.map((desserts) =>
  //       desserts.id === myFavorite.id ? myFavorite : desserts
  //     );
  //     setFavorites(addMyFav);
  //   };

  //   return (

  //   );
}

export default DessertContainer;
