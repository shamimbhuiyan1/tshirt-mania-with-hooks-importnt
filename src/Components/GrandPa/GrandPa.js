import React, { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./GrandPa.css";

const GrandPa = () => {
  //call create context api with default value ja niche korchi
  const RingContext = createContext("Gold Ring");
  const [house, setHouse] = useState(1);
  const ornaments = "Diamond Ring";
  const handleBuyHouse = () => {
    setHouse(house + 1);
  };
  return (
    //context api setting with value ,ekhane value hbe ring context er value

    <RingContext.Provider value="Gold Ring">
      <div className="grandpa">
        <h4>Grandpa</h4>
        <button
          onClick={() => {
            handleBuyHouse();
          }}
        >
          Buy a House
        </button>

        <section style={{ display: "flex" }}>
          <Father ornaments={ornaments} house={house}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </section>
      </div>
    </RingContext.Provider>
  );
};

export default GrandPa;
