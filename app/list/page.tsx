"use client";

import { useState } from "react";

export default function List() {
  let products: Array<string> = ["Tomatoes", "Pasta", "Coconut"];
  let [count, setCount] = useState([0, 0, 0]);

  function increaseCountButton(operator: string, index: number) {
    return (
      <button onClick={() => setProductCount(operator, index)}>
        {operator}
      </button>
    );
  }

  function setProductCount(operator: string, index: number) {
    let temp: Array<number> = [...count];
    if (operator == "+") {
      temp[index]++;
    }
    if (operator == "-") {
      temp[index]--;
    }
    setCount(temp);
  }

  return (
    <div>
      <h2 className="title">Products</h2>
      {products.map((product, index) => (
        <div className="food" key={index}>
          <img src={`/food${index}.png`} alt={product} className="food-img" />
          <h4>{product} $40</h4>
          <span> {count[index]} </span>
          {increaseCountButton("-", index)}
          {increaseCountButton("+", index)}
        </div>
      ))}
    </div>
  );
}
