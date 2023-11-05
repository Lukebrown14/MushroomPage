import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div class="Header">
      <div class="Author">
        <h2> LUKE BROWN</h2>
      </div>
      <div class="fungiTitle">
        <h1 className="Title">Fungi</h1>
      </div>
      <div class="learnTitle">
        <h1 className="Learn"> Learn The Mushroom</h1>
      </div>
      <div class="div4"> </div>
      <div class="div5">
        <img src="Mushroom.png" alt="Mushroom Drawing" />
      </div>
      <div class="BeTitle">
        <h1 className="Be"> Be The Mushroom</h1>
      </div>
    </div>
  );
};

export default Header;
