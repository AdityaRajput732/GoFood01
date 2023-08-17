import React, { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext();
const cartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          qty: action.qty,
          size: action.size,
          price: action.price,
          img: action.img,
        },
      ];
    case "REMOVE":
      return state.filter((item, index) => index !== action.index);
    case "UPDATE":
        return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            qty: parseInt(action.qty) + item.qty,
            price: action.price + item.price,
          };
        }
        return item;
      });
    case "DROP":
      // let emptyArr = [];
      return [];
    default:
      console.log("Error in Reducer");
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <cartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </cartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(cartDispatchContext);
