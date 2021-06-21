import React from "react";
// import { Link } from "react-router-dom";

export default function OrderDetails() {
  return (
    <div className="boxed box">
        <h1>Order Details</h1>
        <div className="boxtile">
          <p className="hightext">Code</p>
          <span className="lowtext">Parcel ID</span>
        </div>
        <div className="boxtile">
          <p className="hightext">Track No.</p>
          <span className="lowtext">Tracking ID</span>
        </div>
        <div className="boxtile">
          <p className="hightext">Shipping Date</p>
          <span className="lowtext">Ship Date</span>
        </div>
            <div className="boxtile">
          <p className="hightext">
            Weight 
          </p>
            <span className="lowtext">1 kg</span>
            </div>
            <div className="boxtile">
          <p className="hightext">
            Cost 
          </p>
            <span className="lowtext">UGX 15000</span>
            </div>
       
        <div className="boxtile">
          <p className="hightext">From</p>
          <span className="lowtext">Location</span>
        </div>
        <div className="boxtile">
          <p className="hightext">To</p>
          <span className="lowtext">Destination</span>
          <button>Change Destination</button>

        </div>
      </div>
   
  );
}
