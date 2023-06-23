import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Container, Button } from "react-bootstrap";

function Home() {
  const [desserts, setDessert] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/desserts")
      .then((r) => r.json())
      .then((desserts) => {
        console.log("Sweet Dessert pictures loaded");
        setDessert(desserts);
      });
  }, []);

  return (
    <Container className="bg-light text-center">
      <h3 className="favorite-dessert-home">Favorite Desserts</h3>
      <div>
        {desserts.map((dessert) => dessert.name)}
        {/* <img src={dessert.image} style={{ width: "100%", height: "auto" }} />
        ))} */}
      </div>
      <Link to="/desserts">
        <Button
          variant="outline-primary"
          size="md"
          style={{ border: "solid 2px", margin: "1rem" }}
        >
          Check out all Desserts
        </Button>
      </Link>
    </Container>
  );
}

export default Home;
