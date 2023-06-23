import React from "react";

import { useState, useEffect } from "react";

function DessertList() {
  const [favorite, setMyFav] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/desserts")
      .then((r) => r.json())
      .then((desserts) => {
        console.log("Sweet Dessert pictures loaded");
        setMyFav(desserts);
      });
  }, []);

  return <div>DessertList {favorite}</div>;
}

export default DessertList;
