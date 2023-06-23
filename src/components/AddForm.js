// import React from "react";
// import { useState, useEffect } from "react";
// import { Form, Button, InputGroup } from "react-bootstrap";

// function AddForm() {
//   const [desserts, setDesserts] = useState([]);
//   //     name: "",
//   //     image: "",
//   //     ingredients: "",
//   //     directions: "",
//   //     Favorite: "",
//   //   });
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
//   return (
//     // <h3> sweet {desserts}</h3>

//     // <form>
//     //   <div>
//     //     <label> sweet {formData}</label>
//     //     <input type="text" placeholder="name" />
//     //   </div>
//     // </form>

//     <>
//       <InputGroup className="mb-3">
//         <Form.Label>name</Form.Label>
//         <Form.Control
//           type="text"
//           name="name"
//           placeholder="Enter name of the dessert"
//           onChange={handleChangeTask}
//           value={desserts.name}
//         />
//       </InputGroup>

//       <InputGroup className="mb-3">
//         <Form.Label>image</Form.Label>
//         <Form.Control
//           type="image"
//           placeholder="copy image's url"
//           onChange={handleChangeTask}
//           value={desserts.image}
//         />
//       </InputGroup>

//       <InputGroup className="mb-3">
//         <Form.Label>Ingredients</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Write down the ingredients"
//           onChange={handleChangeTask}
//           value={desserts.ingredients}
//         />
//       </InputGroup>

//       <InputGroup className="mb-3">
//         <Form.Label>Directions</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Write down the Directions"
//           onChange={handleChangeTask}
//           value={desserts.directions}
//         />
//       </InputGroup>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>

//       {/* // <Container className="">
//     //   <Form onSubmit={handleSubmitTask}>
//     //     <Form.Group className="mb-3" controlId="formBasicEmail">
//     //       <Form.Label>name</Form.Label>
//     //       <Form.Control type="text" name="name" placeholder="Enter name of the dessert" onChange={handleChangeTask} value={desserts.name} />
//     //     </Form.Group>

//     //     <Form.Group className="mb-3" controlId="formBasicPassword">
//     //       <Form.Label>image</Form.Label>
//     //       <Form.Control type="image" placeholder="copy image's url" onChange={handleChangeTask} value={desserts.image} />
//     //     </Form.Group>
//     //     <Form.Group className="mb-3" controlId="formBasicCheckbox">
//     //       <Form.Label>description</Form.Label>
//     //       <Form.Control type="text" placeholder="copy image's url" />
//     //     </Form.Group>
//     //     <Button variant="primary" type="submit">
//     //       Submit
//     //     </Button>
//     //   </Form>
//     // </Container>
//   ); */}
//     </>
//   );
// }

// export default AddForm;
