import { createContext, useEffect, useState } from "react";
import { instance } from "../customHooks/useAxios";

export const CONTEXT = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = "mustaqimkhan@gmail.com";

  useEffect(() => {
    instance
      .get(`/cart/${user}`)
      .then((res) => {
        setCart(res.data.cart);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loading]);

  const addToCart = (id) => {
    instance
      .post(`/add-to-cart/${user}`, { id })
      .then((res) => {
        console.log(res.data);
        setLoading(!loading);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const removeItem = (id) => {
    console.log(id);
    instance
      .patch(`/remove-from-cart/${user}/${id}`)
      .then((res) => {
        setLoading(!loading);
      })
      .catch((err) => console.log(err));
  };
console.log(cart)
  const value = {
    cart,
    addToCart,
    removeItem,
    loading,
  };
  return <CONTEXT.Provider value={value}>{children}</CONTEXT.Provider>;
};

export default Context;
