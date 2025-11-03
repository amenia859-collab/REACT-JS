import React from "react";
import product from "../product";
import { Card } from "react-bootstrap";
const Name = () => {
  return (
    <div>
      <Card.Title>{product.name}</Card.Title>
    </div>
  );
};

export default Name;
