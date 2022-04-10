import React from "react";
import Special from "../Special/Special";

const MySelf = ({ house, ornaments }) => {
  return (
    <div>
      <h4>MySelf</h4>
      <p> house: {house} </p>
      <Special ornaments={ornaments}></Special>
    </div>
  );
};

export default MySelf;
