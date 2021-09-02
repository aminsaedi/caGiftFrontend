import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartNavbar = () => {
  return (
    <div className="cartNavbar">
      <i className="cartNavbar__items">1</i>
      <p>سبد خرید</p>
      <FontAwesomeIcon icon={faShoppingCart} color="#32325D" />
    </div>
  );
};

export default CartNavbar;
