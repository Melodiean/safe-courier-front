import React from "react";

export default function About() {
  return (
    <div className="boxed">
      <h1>View all Orders</h1>
      <div>
        <div className="boxtile">
          <div>
            <span>Parcel ID</span>
            <span>parcelID</span>
          </div>
          <div>
            <span>Order Date</span>
            <span>orderDate</span>
          </div>
          <div>
            <span>Ship Date</span>
            <span>shipDate</span>
          </div>
          <div>
            <span>Sender</span>
            <span>sender</span>
          </div>
          <div>
            <span>Location</span>
            <span>currentLocation</span>
          </div>
          <div>
            <span>Destination</span>
            <span>destination</span>
          </div>
          <div>
            <span>Status</span>
            <span>status</span>
          </div>
          <div>
            <span>Weight</span>
            <span>weight</span>
          </div>
          <div>
            <span>Price</span>
            <span>price</span>
          </div>
        </div>
      </div>
    </div>
  );
}
