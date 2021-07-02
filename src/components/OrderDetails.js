import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/context";

function Parcel() {
  const { parcel } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState("");
  let pid = parcel.oid;

  const f = async () => {
    if (pid) {
      let res = await fetch(`https://mnscapi.herokuapp.com:3020/api/v1/parcels/${pid}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setLoading(false);
          setOrder(data);
        })
        .catch((er) => console.log(er.message));
      // .finally(() => {
      //   setLoading(false);
      // });

      return res;
    }
  };

  useEffect(() => {
    f();
    return setLoading(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading)
    return (
      <div className="boxed">
        <p>Loading...</p>
      </div>
    );
  return (
    <div>
      <div className="boxtile">
        <p className="hightext">Track No.</p>
        <span className="lowtext">{order.trackingNo}</span>
      </div>
      <div className="boxtile">
        <p className="hightext">Status</p>
        <span className="lowtext">{order.status}</span>
      </div>
      <div className="boxtile">
        <p className="hightext">Weight</p>
        <span className="lowtext">{order.weight} Kg</span>
      </div>
      <div className="boxtile">
        <p className="hightext">Cost</p>
        <span className="lowtext">{order.cost} UGX</span>
      </div>

      <div className="boxtile">
        <p className="hightext">From</p>
        <span className="lowtext">{order.location}</span>
      </div>
      <div className="boxtile">
        <p className="hightext">To</p>
        <span className="lowtext">{order.destination}</span>
      </div>
    </div>
  );
}

export default function OrderDetails() {
  const { user } = useContext(AuthContext);
  let role = user.role;
  if (!role) {
    return (
      <div className="boxed box">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="boxed box">
      <h1>Order Details</h1>
      <Parcel />
      {role === "user" ? (
        <div>
          <div>
            <button>Change Destination</button>
            <button>Cancel Order</button>
          </div>
          <Link to="/track">Track Parcel</Link>
        </div>
      ) : (
        <div>
          <button>Change Status</button>
          <button>Change Location</button>
        </div>
      )}
    </div>
  );
}
