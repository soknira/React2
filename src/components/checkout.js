import React, { useState, useEffect } from "react";
import axios from "axios";
import QRCode from "react-qr-code";

const Checkout = () => {
  const [cart, setCart] = useState([
    { item: "Item 1", price: 100 },
    { item: "Item 2", price: 200 },
  ]);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("paypal"); // default to PayPal
  const [email, setEmail] = useState("customer@example.com"); // Default email, replace with actual user email
  const [paypalScriptLoaded, setPaypalScriptLoaded] = useState(false);

  // Calculate the total amount
  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  useEffect(() => {
    // Dynamically load the PayPal SDK script
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID&currency=USD";
    script.async = true;
    script.onload = () => setPaypalScriptLoaded(true);
    document.body.appendChild(script);
  }, []);

  const handleCheckout = async () => {
    try {
      // Send the cart data to your checkout API (backend)
      const checkoutResponse = await axios.post("/api/checkout", { cart });

      if (checkoutResponse.data.success) {
        // After successful checkout, clear the cart
        localStorage.removeItem("cart");
        setCart([]);

        // Send the email notification
        const emailResponse = await axios.post("http://localhost:5000/api/send-checkout-email", {
          cart,
          customerEmail: email, // Replace with actual customer email
        });

        if (emailResponse.status === 200) {
          setCheckoutSuccess(true);
        } else {
          console.error("Error sending email:", emailResponse);
        }
      }
    } catch (error) {
      console.error("Error during checkout or email sending:", error);
    }
  };

  // Handle payment method selection
  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div>
      <h2>Checkout</h2>
      {checkoutSuccess ? (
        <div>
          <h3>Checkout Successful!</h3>
          <p>Thank you for your order. You will receive an email confirmation shortly.</p>
        </div>
      ) : (
        <div>
          <h3>Cart Details:</h3>
          <pre>{JSON.stringify(cart, null, 2)}</pre>

          <h3>Total Amount: ${totalAmount}</h3>

          {/* Payment Method Selection */}
          <div>
            <h4>Select Payment Method:</h4>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={handlePaymentChange}
              />
              PayPal
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={handlePaymentChange}
              />
              Cash on Delivery
            </label>
          </div>

          {/* PayPal Integration */}
          {paymentMethod === "paypal" && paypalScriptLoaded && (
            <div>
              <h3>Pay with PayPal</h3>
              {/* PayPal button */}
              <div id="paypal-button-container"></div>
              <script>
                if (window.paypal) {
                  window.paypal.Buttons({
                    createOrder: (data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: totalAmount.toString(),
                            },
                          },
                        ],
                      });
                    },
                    onApprove: (data, actions) => {
                      return actions.order.capture().then(function (details) {
                        alert(
                          "Transaction completed by " + details.payer.name.given_name
                        );
                        handleCheckout();
                      });
                    },
                  }).render("#paypal-button-container")
                }
              </script>
            </div>
          )}

          {/* QR Code for Payment */}
          {paymentMethod === "cod" && (
            <div>
              <h3>QR Code for Order</h3>
              {/* Generate a QR code with the order details */}
              <QRCode value={`Order details: ${JSON.stringify(cart, null, 2)}`} />
            </div>
          )}

          <button onClick={handleCheckout}>Complete Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
