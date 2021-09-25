import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./action";
import { countSelector } from "./selector";
import "./styles.css";

export default function App() {
  const count = useSelector(countSelector);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>+</button>
      &nbsp;
      <span>{` ${count} `} </span> &nbsp;
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
