import React from "react";
import { CLASS_LIST } from "../consts";

const ClassDetails = ({ selected, setSelectedClass }) => {
  const selectedClass = CLASS_LIST[selected];
  return (
    <div>
      <h1>{selected} Minimum Requirements</h1>
      <ul>
        {selectedClass &&
          Object.keys(selectedClass).map((key) => (
            <li style={{ listStyle: "none" }}>
              {key} : {selectedClass[key]}
            </li>
          ))}
      </ul>
      <button
        className="btn"
        onClick={(e) => {
          setSelectedClass("");
        }}
      >
        Close Requirements View
      </button>
    </div>
  );
};

export default ClassDetails;
