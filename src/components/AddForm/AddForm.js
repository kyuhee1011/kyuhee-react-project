import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";
import "./AddForm.css";

const formList = {
  name: "",
  image: "",
  description: "",
  Favorite: "",
};
// passing desserts and setDessert from App (parent) component

function AddForm({ desserts, setDessert }) {
  const [formDesserts, setformDesserts] = useState(formList);
  let history = useHistory();
  // console.log(history);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformDesserts((formDesserts) => ({ ...formDesserts, [name]: value }));
  };

  const handleSubmitTask = (e) => {
    e.preventDefault();
    let newList = {
      name: formDesserts.name,
      image: formDesserts.image,
      description: formDesserts.description,
    };
    fetch(`http://localhost:3000/desserts`, {
      // POST - Creates a resources (add new dessert)
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newList),
    })
      .then((res) => res.json())
      .then((returnedDesserts) => {
        console.log(returnedDesserts);
        // receive setDessert from the App component
        //adding new dessert plus original dessert list
        setDessert([...desserts, returnedDesserts]);

        history.push("/desserts");
      });
  };
  return (
    <Form className="formContainer" onSubmit={handleSubmitTask}>
      <h3 className="addFormTitle"> Add My Sweet </h3>
      <div className="formLeft">
        <InputGroup className="formCenter">
          <Row>
            <Col lg="10">
              <Form.Label className="formName">Name</Form.Label>

              <Form.Control
                id="name"
                className="inputSpace"
                type="text"
                name="name"
                placeholder="Enter name of the dessert"
                //onChange - when the value of an input element change
                // (handleInPutChange)
                onChange={handleInputChange}
                value={formDesserts.name}
              />
            </Col>
          </Row>
        </InputGroup>

        <InputGroup className="formCenter">
          <Row>
            <Col md="10">
              <Form.Label className="formName">Image</Form.Label>

              <Form.Control
                id="image"
                className="inputSpace"
                name="image"
                type="text"
                size="md"
                placeholder="copy image's url"
                onChange={handleInputChange}
                value={formDesserts.image}
              />
            </Col>
          </Row>
        </InputGroup>

        <InputGroup className="formCenter">
          <Row>
            <Col lg="10">
              <Form.Label className="descriptionName">Description</Form.Label>

              <Form.Control
                sm="12"
                id="description"
                name="description"
                as="textarea"
                rows={7}
                className="inputSpace"
                size="lg"
                placeholder="Write down the description"
                onChange={handleInputChange}
                value={formDesserts.description}
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
