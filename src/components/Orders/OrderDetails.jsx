import React from 'react';

// Refactored to use prop destructuring directly in the function signature
function OrderDetails({ orderId, customerName, amount }) {
  return (
    <div>
      <h3>Order ID: {orderId}</h3>
      <p>Customer: {customerName}</p>
      <p>Total: ${amount.toFixed(2)}</p> {/* Ensure price formatting */}
    </div>
  );
}

export default OrderDetails;
