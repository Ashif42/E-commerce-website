import { useLocation } from 'react-router-dom';

function OrderConfirmation() {
  const location = useLocation();
  const orderDetails = location.state?.orderDetails;

  if (!orderDetails) {
    return <div>Invalid access</div>;
  }

  return (
    <div className="order-confirmation text-center">
      <br /> <br />
      <br /> <br />
      <h2>Order Placed Successfully</h2> <br />
      <p>Order ID: {orderDetails.orderId}</p><br />
      <p>Total Amount: ${orderDetails.totalAmount}</p><br />
      <br />
      <br />
      <br /><br /><br /><br />
      <br />
    </div>
  );
}

export default OrderConfirmation;
