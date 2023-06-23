import React from "react";
import { useState, useEffect } from "react";
// import { Form, Button } from "react-bootstrap";

function AddForm() {
  const [desserts, setDesserts] = useState([]);
  //     name: "",
  //     image: "",
  //     ingredients: "",
  //     directions: "",
  //     Favorite: "",
  //   });

  useEffect(() => {
    fetch("http://localhost:3000/desserts")
      .then((r) => r.json())
      .then((desserts) => {
        console.log("Sweet Dessert pictures loaded");
        setDesserts(desserts);
      });
  }, []);

  //   const handleSubmitTask = (e) => {
  //     e.preventDefault();
  //   };
  return (
    <h3> sweet {desserts}</h3>

    // <form>
    //   <div>
    //     <label> sweet {formData}</label>
    //     <input type="text" placeholder="name" />
    //   </div>
    // </form>

    // <Container className="">
    //   <Form onSubmit={handleSubmitTask}>
    //     <Form.Group className="mb-3" controlId="formBasicEmail">
    //       <Form.Label>name</Form.Label>
    //       <Form.Control type="title" placeholder="Enter name of the food" />
    //     </Form.Group>

    //     <Form.Group className="mb-3" controlId="formBasicPassword">
    //       <Form.Label>image</Form.Label>
    //       <Form.Control type="image" placeholder="copy image's url" />
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //       <Form.Label>description</Form.Label>
    //       <Form.Control type="text" placeholder="copy image's url" />
    //     </Form.Group>
    //     <Button variant="primary" type="submit">
    //       Submit
    //     </Button>
    //   </Form>
    // </Container>
  );
}

export default AddForm;
