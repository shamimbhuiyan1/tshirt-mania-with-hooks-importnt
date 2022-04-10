import React from "react";
import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

const Father = ({ house, ornaments }) => {
  return (
    <div>
      <h4>Father</h4>
      <p>House:{house} </p>
      <div style={{ display: "flex" }}>
        <MySelf ornaments={ornaments} house={house}></MySelf>
        <Brother house={house}></Brother>
        <Sister house={house}></Sister>
      </div>
    </div>
  );
};

export default Father;
