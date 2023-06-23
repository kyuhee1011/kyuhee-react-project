import React from "react";

function DessertPop({ id, favorites, onMyFav }) {
  const handleDeleteClickTask = () => {
    fetch(`http://localhost:3000/desserts/${id}`, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ favorites: !favorites }),
    })
      .then((res) => res.json())
      .then(onMyFav);
  };
  return <div>DessertPop</div>;
}

export default DessertPop;
