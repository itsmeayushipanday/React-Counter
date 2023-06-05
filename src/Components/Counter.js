import React, { useState } from "react";
import "./Styles/Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);
  const [operation, setOperation] = useState("");

  const addHandler = () => {
    setCount(count + value);
  };
  const subHandler = () => {
    setCount(count - value);
  };

  const inputHandler = (e) => {
    setValue(parseInt(e.target.value));
  };

  return (
    <div className="container">
      <div className="counter-line">
        <h3 className="counter"> Count: {count} </h3>
      </div>
      <div className="button-line">
        <button className="button" onClick={addHandler}>
          Increment
        </button>
        <button className="button" onClick={subHandler}>
          Decrement
        </button>
      </div>
      <div className="input-line">
        <input
          className="input"
          type="number"
          value={value}
          onChange={inputHandler}
          placeholder="Enter Value"
          style={{ backgroundColor: "#b3adad", color: "#fff" }}
        ></input>
      </div>
    </div>
  );
};

export default Counter;
