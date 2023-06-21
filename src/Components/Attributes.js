import React, { useState, useEffect } from "react";
import { ATTRIBUTE_LIST } from "../consts";

const Attributes = ({ attributes, updateAttributes }) => {
  console.log();

  const calculate_AbilityMofiier = (value) => {
    if (value >= 10) {
      return Math.trunc((value - 10) / 2);
    } else {
      return value - 10;
    }
  };

  const incrementCount = (attr) => {
    const total_attributes_strength = attributes.reduce(
      (a, b) => a.value + b.value,
      0
    );
    if (total_attributes_strength > 70) {
      window.alert("you have reached maximum strength.");
    }
    let updated = { ...attributes };
    console.log(attr, attributes);
    updated[attr] = {
      value: attributes[attr].value + 1,
      ability: calculate_AbilityMofiier(attributes[attr].value + 1),
    };
    console.log(updated);
    updateAttributes(updated);
  };
  const decrementCount = (attr) => {
    let updated = { ...attributes };
    console.log(attr, attributes);
    updated[attr] = {
      value: attributes[attr].value - 1,
      ability: calculate_AbilityMofiier(attributes[attr].value - 1),
    };
    console.log(updated);
    updateAttributes(updated);
  };

  return (
    <>
      <h1>Attributes</h1>
      {attributes &&
        Object.keys(attributes).map((attr) => (
          <ul>
            <li key={attr} className="list">
              {" "}
              {attr}:{attributes[attr].value}(Modifier:{" "}
              {attributes[attr].ability})
              <button
                onClick={() => {
                  incrementCount(attr);
                }}
              >
                +
              </button>
              <button onClick={() => decrementCount(attr)}>-</button>
            </li>
          </ul>
        ))}
    </>
  );
};

export default Attributes;
