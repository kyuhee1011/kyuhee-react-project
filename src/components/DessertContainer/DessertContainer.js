import React from "react";
// import { useState } from "react";
import DessertCard from "../DessertCard/DessertCard";
import { CardGroup } from "react-bootstrap";

//Dessert Page

function DessertContainer({ desserts, onMyFavList, onSearchSubmits }) {
  const dessertArray = desserts.map((dessert) => {
    return (
      <DessertCard
        className="dessertContainer"
        key={dessert.id}
        dessert={dessert}
        onMyFavList={onMyFavList}
        onSearchSubmits={onSearchSubmits}
      />
    );
  });

  return <CardGroup>{dessertArray}</CardGroup>;
}

export default DessertContainer;
