import React from "react";
import DessertPop from "./DessertPop";
import { Card, CardGroup, Button } from "react-bootstrap";

function DessertList() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Dalgona-Korean sugar candy</Card.Title>
          <Card.Text>Sweet Sugar Candy.</Card.Text>
        </Card.Body>
        <Button variant="danger">Adds to My Favorite</Button>{" "}
      </Card>
    </CardGroup>
  );
}

export default DessertList;
