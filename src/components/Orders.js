import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../context/context";

function OrderBox(props) {
  return (
    <div className="boxod">
      <span>{props.text}</span>
      <span>{props.orderText}</span>
    </div>
  );
}

function Ords() {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const uid = user.UID;
  const role = user.role;
  const [loading, setLoading] = useState(true);

  const [ord, setOrds] = useState([]);

  const { setParcel } = useContext(AuthContext);

  const handleOrder = (o) => {
    let oid = o.currentTarget.id;
    setParcel({ oid });
    history.push("/details");
  };

  const f = async () => {
    let url;
    let pg = "?pageNo=1&size=5";
    let userUrl = `/users/${uid}/parcels${pg}`;

    let adminUrl = `/parcels${pg}`;

    if (role === "admin") {
      url = adminUrl;
    } else {
      url = userUrl;
    }

    if (uid) {
      let res = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          setOrds(data);
        })
        .catch((er) => console.log(er.message))
        .finally(() => {
          setLoading(false);
        });

      return res;
    }
  };

  useEffect(
    () => {
      f();
      return setLoading(true);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // &&

  if (loading)
    return (
      <div className="">
        <p>Loading...</p>
      </div>
    );
  return ord.length === 0 ? (
    <div>
      <p>No Orders!</p>
    </div>
  ) : (
    <div>
      {ord.map((od) => (
        <div key={od._id} className="boxo" id={od._id} onClick={handleOrder}>
          <div className="boxor">
            <span>{od.orderDate.substr(0, 10)}</span>
          </div>
          <OrderBox text="Shipped:" orderText={od.shipDate} />
          <OrderBox text="Weight:" orderText={`${od.weight} Kg`} />
          <OrderBox text="TrackID:" orderText={od.trackingNo} />
          <OrderBox text="Price:" orderText={`${od.cost} UGX`} />
        </div>
      ))}
    </div>
  );
}

export default function Orders() {
  return (
    <div className="boxed">
      <h1>Orders</h1>
      <Ords />
      <div className="boxodo">
        <Link to="/order">Make an Order!</Link>
        <Link to="/track">Track a Parcel!</Link>
      </div>
    </div>
  );
}
