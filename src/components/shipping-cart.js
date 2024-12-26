import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import '../components/shipping.css';

function ShippingCart() {
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("paypal"); // Default to PayPal
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    country: "",
    city: "",
    postalCode: "",
  });

  useEffect(() => {
    // Load the cart data when the component mounts
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);

    // Dynamically load the PayPal script
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID&currency=USD";
    script.async = true;
    script.onload = () => {
      if (paymentMethod === "paypal") {
        loadPayPalButton();
      }
    };
    document.body.appendChild(script);

    return () => {
      // Clean up PayPal script on component unmount
      const scriptElement = document.querySelector("script[src^='https://www.paypal.com']");
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
    };
  }, [paymentMethod]); // Only reload PayPal script when payment method changes

  const loadPayPalButton = () => {
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
            alert("Transaction completed by " + details.payer.name.given_name);
            handleCheckout();
          });
        },
      }).render("#paypal-button-container");
    }
  };

  const handleRemove = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (productId, quantity) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity };
      }
      return product;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const totalAmount = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleCheckout = () => {
    setCheckoutSuccess(true);
    alert("Checkout successful!");
  
    // Send email notification to the payer
    const emailData = {
      email: formData.email,
      name: formData.name,
      totalAmount: totalAmount,
      cart: cart,
    };
  
    fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Email sent:", data);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Generate a unique online payment URL (this would be dependent on your payment gateway)
  const generateOnlinePaymentLink = () => {
    const paymentDetails = {
      amount: totalAmount,
      cart: cart,
      // Add any necessary details like user ID, order ID, etc.
    };
    // This URL would point to your payment gateway or a custom API endpoint
    const paymentLink = `https://yourpaymentgateway.com/checkout?orderId=123456&amount=${totalAmount}&cart=${encodeURIComponent(JSON.stringify(paymentDetails))}`;
    return paymentLink;
  };

  return (
<div className="container">
  {/* Shopping Cart Breadcrumb */}
  <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
    <a href="/index" className="stext-109 cl8 hov-cl1 trans-04">
      Home
      <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
    </a>
    <span className="stext-109 cl4">Shopping Cart</span>
  </div>

  {/* Shopping Cart */}
  <form className="bg0 p-t-75 p-b-85">
    <div className="container">
      <div className="row">
        {/* Cart Items */}
        <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
          <div className="m-l-25 m-r--38 m-lr-0-xl">
            <div className="wrap-table-shopping-cart">
              <table className="table-shopping-cart">
                <thead>
                  <tr className="table_head">
                    <th className="column-1">Product</th>
                    <th className="column-2">Name</th>
                    <th className="column-3">Price</th>
                    <th className="column-4">Quantity</th>
                    <th className="column-5">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product) => (
                    <tr className="table_row" key={product.id}>
                      <td className="column-1">
                        <div className="how-itemcart1">
                          <img
                            src={product.image || "images/default-item.jpg"}
                            alt={product.title}
                          />
                        </div>
                      </td>
                      <td className="column-2">{product.title}</td>
                      <td className="column-3">${product.price}</td>
                      <td className="column-4">
                        <div className="wrap-num-product flex-w m-l-auto m-r-0">
                          <input
                            className="mtext-104 cl3 txt-center num-product"
                            type="number"
                            value={product.quantity}
                            min="1"
                            onChange={(e) =>
                              handleQuantityChange(
                                product.id,
                                parseInt(e.target.value)
                              )
                            }
                          />
                        </div>
                      </td>
                      <td className="column-5">
                        ${(product.price * product.quantity).toFixed(2)}
                      </td>
                      <td className="column-6">
                        <button
                          className="btn btn-danger"
                          onClick={() => handleRemove(product.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Cart Totals and Checkout */}
        <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
          <div className="cart-totals-section">
            <h4 className="mtext-109 cl2 p-b-30">Cart Totals</h4>
            <div className="flex-w flex-t bor12 p-b-13">
              <div className="size-208">
                <span className="stext-110 cl2">Subtotal:</span>
              </div>
              <div className="size-209">
                <span className="mtext-110 cl2">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Payment Method */}
            <div className="payment-method-section">
              <h4 className="mtext-109 cl2 p-b-30">Payment Method</h4>
              <div className="payment-option">
                <label>
                  <input
                    type="radio"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={handlePaymentChange}
                  />
                  PayPal
                </label>
              </div>
              <div className="payment-option">
                <label>
                  <input
                    type="radio"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={handlePaymentChange}
                  />
                  Online Payment (QR)
                </label>
              </div>
              <div className="payment-option">
                <label>
                  <input
                    type="radio"
                    value="delivery"
                    checked={paymentMethod === "delivery"}
                    onChange={handlePaymentChange}
                  />
                  Case on delivery
                </label>
              </div>
            </div>

            {/* Shipping Information Form */}
            <div className="shipping-info-section">
              <h4 className="mtext-109 cl2 p-b-30">Shipping Information</h4>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>

  );
}

export default ShippingCart;
