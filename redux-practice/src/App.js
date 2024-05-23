import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./action";

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>카운트: {count}</h1>
      <button onClick={() => dispatch(increment())}>증가</button>
    </div>
  );
};

export default App;
