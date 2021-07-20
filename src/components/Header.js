import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/context";

export default function Header() {
  const { isAuth, setIsAuth, setUser } = useContext(AuthContext);

  const logout = async () => {
    await fetch("/auth/logout", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((d) => {
        setUser({});
        setIsAuth(false);
      })
      .catch((er) => console.log(er.message));
  };

  if (isAuth)
    return (
      <div className="header">
        <Link to="/order">SAFECOURIER</Link>
        <Link to="/profile">Account</Link>
        <Link to="/" onClick={logout}>
          Logout
        </Link>
      </div>
    );
  return (
    <div className="header">
      <Link to="/" className="hd">SAFECOURIER</Link>
    </div>
  );
}
