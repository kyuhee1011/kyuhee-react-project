import React from "react";
import { useState, useEffect } from "react";
// import DessertList from "./DessertList";

//Dessert Page

function DessertContainer() {
  const [desserts, setDessert] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/desserts")
      .then((r) => r.json())
      .then((desserts) => {
        console.log("Sweet Dessert pictures loaded");
        setDessert(desserts);
      });
  }, []);
  return <div>{desserts.map((dessert) => dessert.name)}</div>;
}

export default DessertContainer;
