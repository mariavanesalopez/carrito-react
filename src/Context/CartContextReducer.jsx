import React from "react";
import { useReducer } from "react";
import { createContext } from "react";

export const CartContextReducer = createContext();

const initialState = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      let exist = state.cart.some(
        (element) => element.id === action.payload.id
      );
      if (exist) {
        let newArr = state.cart.map((element) => {
          if (element.id === action.payload.id) {
            return {
              ...element,
              quantity: element.quantity + action.payload.quantity,
            };
          } else {
            return element;
          }
        });
        return { ...state, cart: newArr };
      } else {
        return { ...state, cart: [...state.cart, action.payload] };
      }

    case "CLEAR_CART":
      return { ...state, cart: [] };

    case "GET_TOTAL_PRICE":
      let total = state.cart.reduce((acc, elemento) => {
        return acc + elemento.price * elemento.quantity;
      }, 0);
      return { ...state, totalPrice: total };
    
      case "GET_TOTAL_QUANTITY":
        let total2= state.cart.reduce((acc, element)=>{
          return acc+element.quantity
        },0)
        return {...state, totalQuantity: total2}

      case "DELETE_BY_ID":
        let arrFiltrado= state.cart.filter(elemento=>elemento.id!== action.payload)
          return {...state, cart: arrFiltrado}
    
      default:
      return state;
  }
}

const CartContextReducerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  

  
  
  return (
    <CartContextReducer.Provider value={{ state, dispatch }}>
      {children}
    </CartContextReducer.Provider>
  );
};

export default CartContextReducerProvider;
