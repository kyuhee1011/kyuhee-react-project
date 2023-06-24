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
function AddForm({ onMyFavList }) {
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
      direction: desserts.directions,
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
          type="text"
          placeholder="copy image's url"
          onChange={handleInputChange}
          value={desserts.image}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Label>Ingredients</Form.Label>
        <Form.Control
          type="text"
          placeholder="Write down the ingredients"
          onChange={handleInputChange}
          value={desserts.ingredients}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Label>Directions</Form.Label>
        <Form.Control
          type="text"
          placeholder="Write down the Directions"
          onChange={handleInputChange}
          value={desserts.directions}
        />
      </InputGroup>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
//   const handleChangeTask = (e) => {
//     e.target.value;
//     setDesserts((desserts) => (desserts, e.target.value));
//   };

//   useEffect(() => {
//     fetch("http://localhost:3000/desserts")
//       .then((r) => r.json())
//       .then((desserts) => {
//         console.log("Sweet Dessert pictures loaded");
//         setDesserts(desserts);
//       });
//   }, []);

//   //   const handleSubmitTask = (e) => {
//   //     e.preventDefault();
//   //     let newMyAdd = {
//   //       name: desserts.name,
//   //       image: desserts.image,
//   //       ingredient: desserts.ingredient,
//   //       direction: desserts.direction,
//   //     };
//   //     useEffect(() => {
//   //       fetch("http://localhost:3000/desserts/", {
//   //         method: "POST",
//   //         headers: { "Content-Type": "application/json" },
//   //         body: JSON.stringify(newMyAdd),
//   //       })
//   //         .then((res) => res.json())
//   //         .then((newMyAdd) => {
//   //           newMyAdd.push("/desserts");
//   //         });
//   //     });
//   //   };

//   //   const onAddMyDessert = (newDessert) => {
//   //     setDesserts([...desserts, newDessert]);
//   //   };

//   //   const handleSubmitTask = (e) => {
//   //     e.preventDefault();
//   //   };
//

export default AddForm;
