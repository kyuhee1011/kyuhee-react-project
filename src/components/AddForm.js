import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, InputGroup } from "react-bootstrap";

const formList = {
  name: "",
  image: "",
  ingredients: "",
  directions: "",
  Favorite: "",
};
function AddForm() {
  const [desserts, setDesserts] = useState(formList);
  let history = useHistory();
  console.log(history);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDesserts((desserts) => ({ ...desserts, [name]: value }));
  };

  const handleSubmitTask = (e) => {
    e.preventDefault();
    let newList = {
      name: desserts.name,
      image: desserts.image,
      description: desserts.description,
    };
    fetch(`http://localhost:3000/desserts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newList),
    })
      .then((res) => res.json())
      .then((returnedDesserts) => {
        setDesserts(returnedDesserts);

        history.push("/desserts");
      });
  };
  return (
    <Form onSubmit={handleSubmitTask}>
      <h3> sweet </h3>
      <InputGroup className="mb-3">
        <Form.Label>name</Form.Label>
        <Form.Control
          id="name"
          type="text"
          name="name"
          placeholder="Enter name of the dessert"
          onChange={handleInputChange}
          value={desserts.name}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Label>image</Form.Label>
        <Form.Control
          id="image"
          name="image"
          type="text"
          placeholder="copy image's url"
          onChange={handleInputChange}
          value={desserts.image}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          id="description"
          name="description"
          type="text"
          placeholder="Write down the description"
          onChange={handleInputChange}
          value={desserts.description}
        />
      </InputGroup>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddForm;
