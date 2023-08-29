import React from 'react';
import { useLocation } from 'react-router-dom';

function OrderConfirmation() {
  const location = useLocation();
  const orderDetails = location.state?.orderDetails;
  const shippingInfo = orderDetails?.shippingInfo; // Access shippingInfo from orderDetails

  if (!orderDetails) {
    return <div>Invalid access</div>;
  }
  const orderDate = new Date(); // Get the current date and time
  const formattedOrderDate = orderDate.toLocaleString();

  return (
    <div className="order-confirmation text-center">
      <br /> <br />
      <br /> <br />
      <h2>Order Placed Successfully</h2> <br />
      <h4>Your Order info:- </h4><br />
      <p>Order ID: {orderDetails.orderId}</p><br />
      <p>Total Amount: ${orderDetails.totalAmount}</p><br />
      {/* Display shippingInfo */}
      {shippingInfo && (
        <div>
          <p>Name: {shippingInfo.name}</p>
          <p>Address: {shippingInfo.address}</p>
          <p>Date and Time: {formattedOrderDate}</p>
        </div>
      )} <br />
    </div>
  );
}

export default OrderConfirmation;
