//Data transfer Child to Parent component

import React from "react";
import { useState } from "react";

export default function ChildComponent(props) {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(name);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}
