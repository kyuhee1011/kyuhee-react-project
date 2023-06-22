// import React from "react";
// import { useState } from "react";
// import {Form, Button }from "react-bootstrap";

// function AddForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     image: "",
//     ingredients: "",
//     directions: "",
//     Favorite: "",
//   });
//   const handleSubmitTask = (e) => {
//     e.preventDefault();
//   };
//   return (
//     <Container className="">
//       <Form onSubmit={handleSubmitTask}>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>name</Form.Label>
//           <Form.Control type="title" placeholder="Enter name of the food" />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>image</Form.Label>
//           <Form.Control type="image" placeholder="copy image's url" />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicCheckbox">
//           <Form.Label>description</Form.Label>
//           <Form.Control type="text" placeholder="copy image's url" />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </Container>
//   );
// }

// export default AddForm;
