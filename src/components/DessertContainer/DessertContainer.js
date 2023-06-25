import React from "react";
// import { useState } from "react";
import DessertCard from "../DessertCard/DessertCard";

import { CardGroup } from "react-bootstrap";
// import AddForm from "./AddForm";

//Dessert Page

function DessertContainer({ desserts, onMyFavList }) {
  // const [modalShow, setModalShow] = useState(false);
  const dessertArray = desserts.map((dessert) => {
    return (
      <DessertCard
        key={dessert.id}
        dessert={dessert}
        onMyFavList={onMyFavList}
      />
    );
  });

  return <CardGroup>{dessertArray}</CardGroup>;
}

export default DessertContainer;
