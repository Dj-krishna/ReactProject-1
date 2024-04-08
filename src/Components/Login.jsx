import React from "react";

export default function Login() {
  return (
    <div>
      <h1>SignIn</h1>
      <div className="inputs">
        <input type="email" placeholder="Email" />
      </div>
      <div className="inputs">
        <input type="password" placeholder="Password" />
      </div>
      <button>Login</button>
    </div>
  );
}
