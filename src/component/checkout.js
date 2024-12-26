import React, { useState, useEffect } from 'react';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    country: ''
  });

  const [isPayPalReady, setIsPayPalReady] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Submit the checkout form
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send the form data to your server here

    // Navigate to a success page after form submission
    window.location.href = '/success';  // Using window.location.href for navigation
    console.log('Form submitted:', formData);
  };

  // PayPal script load handler
  const handlePayPalScriptLoad = () => {
    setIsPayPalReady(true);
  };

  // Dynamically load PayPal script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=AU4HuuzbEzvh8SfOfcwB6R8wxgZY6ol5X7CnGADvUg4w8q0IiPsdxv-y0aFMAqIZyMFvrS623YuR9gl-&currency=USD`;
    script.addEventListener('load', handlePayPalScriptLoad);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // PayPal button component
  const PayPalButton = () => {
    window.paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: "100.00",  // Replace with dynamic order total
              },
            },
          ],
        });
      },
      onApprove: (data, actions) => {
        return actions.order.capture().then((details) => {
          // After successful payment, navigate to success page
          window.location.href = '/success';  // Using window.location.href for navigation
          alert("Payment Successful! " + details.payer.name.given_name);
        });
      },
      onError: (err) => {
        console.error("PayPal Error:", err);
      },
    }).render('#paypal-button');  // Render PayPal button inside the container
  };

  return (
    <div className="container">
      <div className="checkout-form">
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="zip">Zip Code</label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary buttoncheck  ">
            Submit Order
          </button>
        </form>
      </div>

      {/* PayPal Button */}
      <div className="paypal-container">
        <h3>Pay with PayPal</h3>
        {isPayPalReady && <PayPalButton />}
        <div id="paypal-button"></div>
      </div>
    </div>
  );
};

export default CheckoutPage;
