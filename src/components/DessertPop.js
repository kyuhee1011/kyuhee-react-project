import React from "react";
import DessertCard from "./DessertCard";
import { CardGroup } from "react-bootstrap";

function DessertPop({ desserts }) {
  return (
    <CardGroup>
      {desserts.map((dessert) => (
        <DessertCard key={dessert.id} dessert={dessert} />
      ))}
    </CardGroup>
  );
}

export default DessertPop;
