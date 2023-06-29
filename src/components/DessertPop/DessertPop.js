import React from "react";
import DessertCard from "../DessertCard/DessertCard";
import { Row, Container } from "react-bootstrap";

//My Dessert Page

function DessertPop({ desserts, onMyFavList, onSearchSubmits }) {
  const myFavClick = desserts.filter((dessert) => dessert.favorite);
  const myFavDessert = myFavClick.map((dessert) => {
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
  return (
    <Container fluid>
      <Row>{myFavDessert} </Row>{" "}
    </Container>
  );
}

export default DessertPop;
