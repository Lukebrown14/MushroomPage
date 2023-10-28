import React from "react";
import Card from "../Card/Card";
import "./body.css";

const Body = () => {
  return (
    <div class="grid-container">
      <div class="grid-item">
        <Card />
      </div>
      <div class="grid-item">
        <Card />
      </div>
      <div class="grid-item">
        <Card />
      </div>
      <div class="grid-item">
        <Card />
      </div>
      <div class="grid-item">
        <Card />
      </div>
      <div class="grid-item">
        <Card />
      </div>
    </div>
  );
};

export default Body;
