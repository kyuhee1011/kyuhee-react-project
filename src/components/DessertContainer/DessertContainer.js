import React from "react";
import DessertCard from "../DessertCard/DessertCard";
import { Row, Container } from "react-bootstrap";

//Dessert Page

function DessertContainer({ desserts, onMyFavList, onSearchSubmits }) {
  //onMyFavList will add to DessertPop and DessertPop will filter and shows only that are clicked.
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

  return (
    <Container fluid>
      {" "}
      <Row>{dessertArray}</Row>
    </Container>
  );
}

export default DessertContainer;
