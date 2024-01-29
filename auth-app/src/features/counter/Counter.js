import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);

  return (
    <div>
      <span>Value {value}</span>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

export default Counter;
