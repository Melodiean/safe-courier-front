import React from "react";
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="boxed">
      <h1>Login Here!</h1>
      <form>
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />

        <button type="submit">LOGIN</button>
        <Link to="/login">Login as Admin</Link>
      </form>
    </div>
  );
}
