import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios"; // Import axios for API requests

function CartPage() {
  const [cart, setCart] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart); // Re-fetch cart from localStorage
  }, []);
  
  // Fetch cart from localStorage or API
  useEffect(() => {
    const fetchCart = async () => {
      try {
        // Fetch from localStorage or an API
        const response = await axios.get("/api/cart"); // Make an API request here
        setCart(response.data); // Assuming the API returns the cart data
      } catch (error) {
        console.error("Error fetching cart:", error);
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
      }
    };

    fetchCart();
  }, []);

  // Handle remove item from cart
  const handleRemove = async (productId) => {
    try {
      await axios.delete(`/api/cart/${productId}`); // Send request to remove the product from the API
      
      const updatedCart = cart.filter((product) => product.id !== productId);
      setCart(updatedCart);

      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  // Update product quantity
  const handleQuantityChange = async (productId, quantity) => {
    try {
      const updatedCart = cart.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: quantity };
        }
        return product;
      });

      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // Sync updated cart with the API
      await axios.post("/api/cart/update", { cart: updatedCart });
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  // Send the checkout email and clear cart
  const handleCheckout = async () => {
    try {
      // Send the cart data and shipping info to the backend for processing
      const response = await axios.post("/api/checkout", { cart });

      // If the checkout is successful, clear the cart
      if (response.data.success) {
        // Clear cart from state and localStorage
        setCart([]);
        localStorage.removeItem("cart");

        // Redirect to the success page (or any other page)
        history.push("/checkout-success");

        // Send email notification (make sure backend handles this)
        await axios.post("/api/send-email", { email: "your-email@example.com", message: "Checkout successful!" });

        alert("Checkout successful! A confirmation email has been sent.");
      } else {
        alert("Checkout failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div className="container mt-5 ">
      <h2>Your Cart</h2>
      <div className="row">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((product) => (
            <div className="col-md-4" key={product.id}>
              <div className="card mb-4">
                <img src={product.image} alt={product.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      value={product.quantity}
                      min="1"
                      onChange={(e) =>
                        handleQuantityChange(product.id, parseInt(e.target.value))
                      }
                    />
                  </div>
                  <button
                    className="btn btn-danger mt-3"
                    onClick={() => handleRemove(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="mt-4">
          <h4>Total: ${calculateTotal()}</h4>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-secondary"
              onClick={() => history.push("/shipping-cart")}
            >
              View Cart
            </button>
            <button
              className="btn btn-primary"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
