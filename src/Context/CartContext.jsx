import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    let exist = cart.some((element) => element.id === id);
    return exist;
  };

  const addToCart = (item) => {
    if (isInCart(item.id)) {
      let newArr = cart.map((element) => {
        if (element.id === item.id) {
          return {
            ...element,
            quantity: element.quantity + item.quantity,
          };
        } else {
          return element;
        }
      });
      setCart(newArr);
    } else {
      setCart([...cart, item]);
    }
  };


  const clearCart = () => {
    setCart([]);
  };
  const deleteProduct = () => {
    console.log("se elimino el carrito");
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        clearCart,
        addToCart,
        deleteProduct,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
