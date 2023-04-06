import React, { useEffect } from "react";
import { useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import { CartContextReducer } from "../../../Context/CartContextReducer";

const NavbarLayout = () => {
const {state, dispatch}= useContext(CartContextReducer)
 
useEffect(()=>{
  dispatch({type: "GET_TOTAL_QUANTITY"})
},[state.cart])

//const navigate=useNavigate()


return (
    <div>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "activeNavbar" : "navbar")}
      >
        Login
      </NavLink>

      <NavLink
        to="/shop"
        className={({ isActive }) => (isActive ? "acitveNavbar" : "navbar")}
      >
        Tienda
      </NavLink>

      <NavLink
        to="/cart"
        className={({ isActive }) => (isActive ? "activeNavbar" : "navbar")}
      >
        Carrito
      </NavLink>
     <h3>Carrito: {state.totalQuantity}</h3>
      <Outlet/>
    </div>
  );
};

export default NavbarLayout;
