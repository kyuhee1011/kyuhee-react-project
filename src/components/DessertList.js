import React from "react";
import DessertPop from "./DessertPop";
import { Card, CardGroup, Button } from "react-bootstrap";

function DessertList({ id, favorites, onMyFav }) {
  const handleFavClickTask = () =>
    fetch(`http://localhost:3000/desserts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ favorites: !favorites }),
    })
      .then((res) => res.json())
      .then(onMyFav);

  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Dalgona-Korean sugar candy</Card.Title>
          <Card.Text>Sweet Sugar Candy.</Card.Text>
        </Card.Body>
        <Button variant="danger" onClick={handleFavClickTask}>
          Adds to My Favorite
        </Button>
      </Card>

      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Korean Fish Shaped Bread-Bungeoppang</Card.Title>
          <Card.Text>
            Bungeoppang is a fish-shaped bread with sweetened red bean filling.
          </Card.Text>
        </Card.Body>
        <Button variant="danger" onClick={handleFavClickTask}>
          Adds to My Favorite
        </Button>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Korean Sweet Pancake-Hotteok</Card.Title>
          <Card.Text>A type of sugar sweet filled pancake.</Card.Text>
        </Card.Body>
        <Button variant="danger" onClick={handleFavClickTask}>
          Adds to My Favorite
        </Button>
      </Card>
    </CardGroup>
  );
}

export default DessertList;
