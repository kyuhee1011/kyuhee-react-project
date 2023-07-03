import React from "react";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";

import "./DessertCard.css";

function DessertCard({ dessert, onMyFavList }) {
  const { id, name, image, description, favorite } = dessert;
  const [myfavorite, setMyFavorite] = useState(favorite);
  const handleUpdateClickTask = () => {
    setMyFavorite((myfavorite) => !myfavorite);
    fetch(`http://localhost:3000/desserts/${id}`, {
      //Updates new dessert from AddForm page and the PATCH - update new dessert list
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
    <Card
      className="dessertItem"
      key={id}
      style={{ width: "25rem", margin: "1%" }}
    >
      <Card.Img className="imgControl" variant="top" src={image} alt={name} />
      <Card.Body style={{ height: "20vh" }}>
        <Card.Title>{name}</Card.Title>
        <div style={{ height: "100%", width: "100%" }}>
          <Card.Text>{description}</Card.Text>
        </div>
      </Card.Body>

      <Button
        style={{ margin: "4%" }}
        variant="danger"
        onClick={handleUpdateClickTask}
      >
        My Favorite
      </Button>
    </Card>
  );
}

export default DessertCard;
