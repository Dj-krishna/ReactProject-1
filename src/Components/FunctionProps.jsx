import React from "react";

export default function FunctionProps(props) {
  return (
    <div>
      <h3>This is Functional Component</h3>
      <h3>
        Hello {props.name}! Welcome to {props.place}
      </h3>
    </div>
  );
}
