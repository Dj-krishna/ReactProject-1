import React, { useState } from "react";

export default function FormExample() {
  const [userName, setUserName] = useState("");
  const [newUserDetails, setNewUserDetails] = useState();
  const getUserName = (e) => {
    setUserName(e.target.value);
  };
  const userDetails = () => {
    setNewUserDetails(userName);
  };
  return (
    <div className="form-Section">
      <div>
        <h1>{newUserDetails}</h1>
      </div>
      <form action="">
        <input type="text" placeholder="Username" onChange={getUserName} />
        <button onClick={userDetails}>Submit</button>
      </form>
    </div>
  );
}
