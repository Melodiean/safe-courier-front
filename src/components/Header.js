import React, { useContext } from "react";
import { Link
  // , useHistory 
} from "react-router-dom";
import { AuthContext } from "../context/context";

export default function Header() {
  const {user} = useContext(AuthContext);
  const {setUser} = useContext(AuthContext);
// const history = useHistory();

  const logout = async () => {
    await fetch("http://localhost:3020/api/v1/auth/logout", {
      method: "GET",
      credentials: "include",
    }).then(res=> res.json()).then((d)=>{
      setUser({username:""})
      // history.push("/");
    console.log(user)
    }).catch((er)=>console.log(er.message))
  };

  if (user.username==="") {
    return (
      <div className="header">
        <Link to="/">SafECoURiEr</Link>
      </div>
    );
  }
  return (
    <div className="header">
      <Link to="/order">SafECoURiEr</Link>
      <Link to="/profile">Account</Link>
      <Link to="/" onClick={logout}>
        Logout
      </Link>
    </div>
  );
}