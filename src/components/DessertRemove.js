// import React from "react";
// import { Card, Button } from "react-bootstrap";

// function DessertRemove({ dessert }) {
//   const handleFavClickTask = () => {
//     fetch(`http://localhost:3000/desserts/${dessert.id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then((dessertData) => {
//         console.log("new dessert", dessertData);
//       });
//   };
//   return (
//     <Card key={dessert.id}>
//       <Card.Img variant="top" src={dessert.image} />
//       <Card.Body>
//         <Card.Title>{dessert.name}</Card.Title>
//         <Card.Text>{dessert.description}</Card.Text>
//       </Card.Body>
//       <Button variant="danger" onClick={handleFavClickTask}>
//         My Favorite
//         {/* {favorites ? "Add to My Favorite" : "Remove My Dessert"} */}
//       </Button>
//     </Card>
//   );
// }

// export default DessertRemove;
