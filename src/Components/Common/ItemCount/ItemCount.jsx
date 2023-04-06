import { useState, useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import { CartContextReducer } from "../../../Context/CartContextReducer";

const ItemCount = ({ product }) => {
  const [counter, setCounter] = useState(1);
  const {  dispatch} = useContext(CartContextReducer);
  
  const onAdd = () => {
    let obj = {
      ...product,
      quantity: counter,
    };
    dispatch({type: "ADD_TO_CART", payload: obj})
   // addToCart(obj);
  };
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter - 1)}>-</button>

      <button onClick={onAdd}>Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;
