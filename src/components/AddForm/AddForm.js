import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";
import "./AddForm.css";

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
    <Form className="formContainer" onSubmit={handleSubmitTask}>
      <h3 className="addFormTitle"> Add My Sweet </h3>
      <div className="formLeft">
        <InputGroup className="formCenter">
          <Row>
            <Col>
              <Form.Label className="formName">Name</Form.Label>

              <Form.Control
                id="name"
                className="inputSpace"
                type="text"
                name="name"
                placeholder="Enter name of the dessert"
                onChange={handleInputChange}
                value={desserts.name}
              />
            </Col>
          </Row>
        </InputGroup>

        <InputGroup className="formCenter">
          <Row>
            <Col>
              <Form.Label className="formName">Image</Form.Label>
              <Form.Control
                id="image"
                className="inputSpace"
                name="image"
                type="text"
                placeholder="copy image's url"
                onChange={handleInputChange}
                value={desserts.image}
              />
            </Col>
          </Row>
        </InputGroup>

        <InputGroup className="formCenter">
          <Row>
            <Col>
              <Form.Label className="formName">Description</Form.Label>

              <Form.Control
                sm="12"
                id="description"
                name="description"
                as="textarea"
                rows={7}
                className="inputSpace"
                placeholder="Write down the description"
                onChange={handleInputChange}
                value={desserts.description}
              />
            </Col>
          </Row>
        </InputGroup>
      </div>
      <Button className="formSubmt" variant="outline-primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddForm;
