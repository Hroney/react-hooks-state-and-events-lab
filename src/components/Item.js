import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState({ message: "Add to Cart", status: "", buttonClass: "add" })
  function toggleCart() {
    setInCart(inCart.status === ""
      ? { message: "Remove from Cart", status: "in-cart", buttonClass: "remove" }
      : { message: "Add to Cart", status: "", buttonClass: "add" })
  }


  return (
    <li className={inCart.status}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart.buttonClass} onClick={toggleCart}>{inCart.message}</button>
    </li>
  );
}

export default Item;
