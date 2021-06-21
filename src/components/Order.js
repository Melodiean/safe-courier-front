import React from "react";

export default function Order() {
  return (
    <div className="boxed">
      <h1>Make an order!</h1>
      <div>
        <input type="text" placeholder="Weight in Kgs" />
        <input type="text" placeholder="Location" />
        <input type="text" placeholder="Destination" />
      </div>

      <button>Order Now</button>
    </div>
  );
}
