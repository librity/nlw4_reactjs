import React from "react";
import { useState } from "react";

interface ButtonProps {
  color: string;
  children: string;
}

export function Button(props: ButtonProps) {
  const [counter, setCounter] = useState(1);

  const increment = () => setCounter(counter + 1);

  const buttonStyle = {
    backgroundColor: props.color,
    color: "white",
    padding: 10,
    margin: 10,
    borderRadius: 15,
  };

  return (
    <button type="button" style={buttonStyle} onClick={increment}>
      {props.children} <strong>{counter}</strong>
    </button>
  );
}
