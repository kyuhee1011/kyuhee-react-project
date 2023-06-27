import React from "react";
import DessertCard from "../DessertCard/DessertCard";
import { CardGroup } from "react-bootstrap";

function DessertPop({ desserts, onMyFavList }) {
  const myFavClick = desserts.filter((dessert) => dessert.favorite);
  const myFavDessert = myFavClick.map((dessert) => {
    return (
      <DessertCard
        className="dessertContainer"
        key={dessert.id}
        dessert={dessert}
        onMyFavList={onMyFavList}
      />
    );
  });
  return <CardGroup>{myFavDessert}</CardGroup>;
}

export default DessertPop;
