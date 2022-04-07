import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const CartButton = () => {
  const state = useSelector((state) => state.addItem);
  return (
    <>
      <NavLink to="/cart" className="btn btn-outline-primary ms-2">
        <span className="fa fa-shopping-cart me-1"></span> Cart ({state.length})
      </NavLink>
    </>
  );
};

export default CartButton;
