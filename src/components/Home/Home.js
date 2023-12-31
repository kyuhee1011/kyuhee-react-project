import React from "react";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Container, Button } from "react-bootstrap";
import "./Home.css";

function Home({ desserts }) {
  return (
    <Container className="bg-light text-center">
      <h3 className="favorite-dessert-home">Favorite Desserts</h3>
      <div>
        {desserts.map((dessert) => (
          <img
            className="imgControl"
            key={dessert.id}
            src={dessert.image}
            style={{ width: "25rem", height: "50vh", margin: "1%" }}
            alt="Sweet Dessert"
          />
        ))}
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
