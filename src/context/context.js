import React, { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState({
    isAuth: "",
    UID: "",
    email: "",
    username: "",
    role: "",
  });
  const [isAuth, setIsAuth] = useState(false);
  const [parcel, setParcel] = useState("");

  const authUser = async () => {
    const res = await fetch("https://mnscapi.herokuapp.com:3020/api/v1/auth/profile", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        if (d.isAuth) {
          setIsAuth(true);
          setUser(d);
          console.log(d)
        }
        setIsAuth(false);
      })
      .catch((er) => {
        console.log(er.message);
        setIsAuth(false)
      });

    return res;
  };

  useEffect(() => {
    authUser();
  }, []);

  return (
    <AuthContext.Provider value={[user,setUser,
      isAuth, setIsAuth,parcel,setParcel]}>
      {props.children}
    </AuthContext.Provider>
  );
};
