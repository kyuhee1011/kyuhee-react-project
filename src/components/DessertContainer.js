import React from "react";
import { useState, useEffect } from "react";
import DessertList from "./DessertList";
// import DessertPop from "./DessertPop";
// import AddForm from "./AddForm";

//Dessert Page

function DessertContainer() {
  const [desserts, setDesserts] = useState([]);
  //   const [favorites, setFavorites] = useState(false);
  //   const [searchSweet, setSearchSweet] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/desserts")
      .then((r) => r.json())
      .then((desserts) => {
        setDesserts(desserts);
      });
  }, []);

  //   const handleMyFavDessert = () => {
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
    <div>
      <DessertList desserts={desserts} />
    </div>
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
