import React from "react";
// import user from "../images/user.png";

export default function Profile() {
  return (
    <div className="boxed boxtile">
      <h1>Profile</h1>
      {/* <img src={user} alt="avatar by Freepik" className="pimg" /> */}
      <div>
          <h3>Personal Info</h3>
          <div className="boxtile">
          <p>Username</p>
          {/* <p>Password</p> */}
          <p>Email</p>
          </div>
      </div>
      <div>
          <h3>My orders</h3>
          <div>

          </div>
      </div>
    </div>
  );
}
