import React from "react";
import { Card, Button } from "react-bootstrap";

function DessertCard({ dessert }) {
  const handleDeleteClickTask = () => {
    fetch(`http://localhost:3000/desserts/${dessert.id}`, {
      method: "DELETE",
    }).then((res) => res.json());
  };
  return (
    <Card key={dessert.id}>
      <Card.Img variant="top" src={dessert.image} />
      <Card.Body>
        <Card.Title>{dessert.name}</Card.Title>
        <Card.Text>{dessert.ingredients}</Card.Text>
      </Card.Body>
      <Button variant="danger" onClick={handleDeleteClickTask}>
        Remove from My Favorite
        {/* {favorites ? "Add to My Favorite" : "Remove My Dessert"} */}
      </Button>
    </Card>
  );
}

export default DessertCard;
