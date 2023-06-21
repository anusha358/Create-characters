import { toBeChecked } from "@testing-library/jest-dom/dist/matchers";
import React, { useEffect, useState } from "react";
import { CLASS_LIST } from "../consts";

const Classes = ({ skills, attributes, setSelectedClass }) => {
  const [classCss, setClassCss] = useState();

  function compareObjects(obj1, obj2) {
    // Get the keys of obj1
    let keys = Object.keys(obj1);

    // Iterate over the keys
    for (let key of keys) {
      console.log(obj1[key], obj2[key]);

      // Check if the key exists in obj2 and if the values are not equal
      if (obj1[key] > obj2[key]) {
        return false;
      }
    }

    // All values are less or equal
    return true;
  }

  console.log(classCss);
  const checkclassesSelected = () => {
    if (attributes) {
      let currentattr = {};
      Object.keys(attributes).map((att) => {
        currentattr[att] = attributes[att].value;
      });
      const classes_attributes = Object.keys(CLASS_LIST).map((c) => {
        return CLASS_LIST[c];
      });
      const compareResult = classes_attributes.map((obj) => {
        return compareObjects(obj, currentattr);
      });
      setClassCss(compareResult);
    }
  };
  useEffect(() => {
    checkclassesSelected();
  }, [skills, attributes]);

  return (
    <div>
      <h1>Classes</h1>
      <ul>
        {classCss &&
          Object.keys(CLASS_LIST).map((o, i) => (
            <li
              onClick={(e) => setSelectedClass(o)}
              style={
                !classCss[i]
                  ? { listStyle: "none", cursor: "pointer" }
                  : { listStyle: "none", color: "red", cursor: "pointer" }
              }
              className={classCss[i] ? "class-list" : "class-list highlighted"}
            >
              {o}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Classes;
