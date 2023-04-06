import { useContext, useEffect } from "react";
import { CartContext } from "../../../Context/CartContext";
import { CartContextReducer } from "../../../Context/CartContextReducer";
import sweetalert2 from "sweetalert2"
import Swal from "sweetalert2";
const CartContainer = () => {
  const { state, dispatch } = useContext(CartContextReducer);
console.log(state.cart);

useEffect(()=>{
  dispatch({type:"GET_TOTAL_PRICE" })
},[])


//sweetalert 2
const limpiarCarrito=()=>{
  Swal.fire({
    title: 'Seguro quieres limpiar el carrito?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Si, seguro',
    denyButtonText: `No, me arrepiento`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Carrito limpiado con exito!', '', 'success')
      dispatch({type: "CLEAR_CART"})
    } else if (result.isDenied) {
      Swal.fire('El carrito queda como esta', '', 'info')
    }
  })
}

  return (
    <div>
    <div   style={{
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "10px",
     
      
    }}
    >
        {state.cart.map((producto) => (
          <div key={producto.id}>
            <h3>{producto.name}</h3>
            <img src={producto.img} style={{ width: "30%" }} />
            <h4>{producto.price}</h4>
            <button onClick={()=>dispatch({type: "DELETE_BY_ID", payload: producto.id})}>Eliminar</button>
          </div>
        ))}
        </div>
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
       onClick={limpiarCarrito}
        
        >Limpiar Carrito</button>
      </div>
    </div>
  );
};

export default CartContainer;
