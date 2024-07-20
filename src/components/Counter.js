import React, { useState } from "react";

const Counter = () => {
  const [text, setText] = useState(0);
  const [res, setRes] = useState("");

  return (
    <div>
      {text}
      <button onClick={(e) => setText(text + 1)}>+</button>
      <button onClick={(e) => setText(text - 1)}>-</button>
      <input onChange={(e) => setRes(e.target.value)}></input>
      {res}
    </div>
  );
};

export default Counter;
