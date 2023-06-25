import React from "react";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";

function DessertCard({ dessert, onMyFavList }) {
  const { id, name, image, description, favorite } = dessert;
  const [myfavorite, setMyFavorite] = useState(favorite);

  const handleUpdateClickTask = () => {
    setMyFavorite((myfavorite) => !myfavorite);
    fetch(`http://localhost:3000/desserts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ favorite: !favorite }),
    })
      .then((res) => res.json())
      .then((newDessertData) => {
        onMyFavList(newDessertData);
      });
  };
  return (
    <Card key={id}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Button variant="danger" onClick={handleUpdateClickTask}>
        My Favorite
        {/* {favorites ? "Add to My Favorite" : "Remove My Dessert"} */}
      </Button>
    </Card>
  );
}

export default DessertCard;
