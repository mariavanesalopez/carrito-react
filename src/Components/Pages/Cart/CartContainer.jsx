import { useContext, useEffect } from "react";
import { CartContext } from "../../../Context/CartContext";
import { CartContextReducer } from "../../../Context/CartContextReducer";

const CartContainer = () => {
  const { state, dispatch } = useContext(CartContextReducer);
console.log(state.cart);

useEffect(()=>{
  dispatch({type:"GET_TOTAL_PRICE" })
},[])

  return (
    <div>
   {/*   <div>
        {cart.map((producto) => (
          <div key={producto.id}>
            <h3>{producto.name}</h3>
            <img src={producto.img} style={{ width: "70%" }} />
          </div>
        ))}
        </div>*/}
      <div
        style={{
          width: "40%",
          borderLeft: " 2px solid white",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <h3>El total del Carrito es:
       {state.totalPrice}</h3>
        <button 
       onClick={()=>dispatch({type: "CLEAR_CART"})}
        
        >Limpiar Carrito</button>
      </div>
    </div>
  );
};

export default CartContainer;
