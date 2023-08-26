import { useLocation } from 'react-router-dom';

function OrderConfirmation() {
  const location = useLocation();
  const orderDetails = location.state?.orderDetails;

  if (!orderDetails) {
    return <div>Invalid access</div>;
  }

  return (
    <div className="order-confirmation">
      <h2>Order Placed Successfully</h2>
      <p>Order ID: {orderDetails.orderId}</p>
      <p>Total Amount: ${orderDetails.totalAmount}</p>
      {/* Display other order details as needed */}
    </div>
  );
}

export default OrderConfirmation;
