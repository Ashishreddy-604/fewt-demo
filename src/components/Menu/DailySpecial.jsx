import React from 'react';

function DailySpecial() {
  const dishName = "Paneer Tikka";
  const price = 6.99;
  const description = "Grilled cottage cheese marinated in yogurt and aromatic spices.";

  return (
    <div>
      <h3>Today's Special</h3>
      <h4>{dishName}</h4>
      <p>Price: ${price.toFixed(2)}</p>
      <p>{description}</p>
    </div>
  );
}

export default DailySpecial;
