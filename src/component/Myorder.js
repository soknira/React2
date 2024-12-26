import React, { useEffect, useState } from 'react';
import './myorder.css';  

const OrderDetails = ({ match }) => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const orderId = match.params.orderId; 
    const storedOrder = JSON.parse(localStorage.getItem('orderDetails'));

    if (storedOrder && storedOrder.orderId === orderId) {
      setOrder(storedOrder);
    } else {
      console.error('Order not found');
    }
  }, [match.params.orderId]);
   if (!order) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="order-details-container">
      <h2 className="order-title">Your Order Details</h2>
      <div className="order-info">
        <p><strong>Order ID:</strong> {order.orderId}</p>
        <p><strong>Total Amount:</strong> ${order.totalAmount}</p>
      </div>

      <h3 className="items-title">Items:</h3>
      <div className="items-list">
        {order.items.map((item) => (
          <div key={item.id} className="item-card">
            <div className="item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="item-details">
              <p className="item-name">{item.name}</p>
              <p><strong>Price:</strong> ${item.price}</p>
              <p><strong>Quantity:</strong> {item.quantity}</p>
              <p><strong>Total:</strong> ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetails;
