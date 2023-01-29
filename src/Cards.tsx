import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
        <ul className="cards__items">
            <CardItem
              src="images/download.jpeg"
              text="Project1"
              label="Adventure"
              path="/project1"
            />
            <CardItem
              src="images/img1.jpeg"
              text="Project2"
              label="Luxury"
              path="/project2"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img1.jpeg"
              text="Project3"
              path="/project3"
            />
            <CardItem
              src="images/img1.jpeg"
              text="Project4"
              path="/product4"
            />
            <CardItem
              src="images/img1.jpeg"
              text="Project5. Also, this is a long string keep the width of container consistent."
              path="/project5"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
