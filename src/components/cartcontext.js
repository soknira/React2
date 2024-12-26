import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Fetch cart from API on component mount or load from localStorage
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get("/api/cart"); // Fetch from API
        setCart(response.data);
      } catch (error) {
        console.error("Error fetching cart from API, using local storage:", error);
        const localCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(localCart);
      }
    };
    fetchCart();
  }, []);

  // Save cart to API
  const updateCartAPI = async () => {
    try {
      await axios.post("/api/cart/update", { cart });
    } catch (error) {
      console.error("Error updating cart on API:", error);
    }
  };

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart)); // Save cart to localStorage
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, updateCartAPI }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => React.useContext(CartContext);
