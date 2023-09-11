import React from 'react';
import { useLocation } from 'react-router-dom';

function OrderConfirmation() {
  const location = useLocation();
  const orderDetails = location.state?.orderDetails;
  const shippingInfo = orderDetails?.shippingInfo;

  if (!orderDetails) {
    return <div>Invalid access</div>;
  }
  const orderDate = new Date();
  const formattedOrderDate = orderDate.toLocaleString();
  const orderAmount = orderDetails.totalAmount;
  return (<div>
    {orderAmount>0 ? (<div className="order-confirmation text-center">
      <br /> <br />
      <br /> <br />
      <h2>Order Placed Successfully</h2> <br />
      <h4>Your Order info:- </h4><br />
      <p>Order ID: {orderDetails.orderId}</p><br />
      <p>Total Amount: ${orderDetails.totalAmount}</p><br />
      {}
      {shippingInfo && (
        <div>
          <p>Name: {shippingInfo.name}</p>
          <p>Address: {shippingInfo.address}</p>
          <p>Date and Time: {formattedOrderDate}</p>
        </div>
      )}
    </div>):<div> <h3>invalid order</h3></div>}
    </div>
  );
}

export default OrderConfirmation;
