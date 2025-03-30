import React from 'react';
import './FoodItem.css'; // We'll create this for basic styling

function FoodItem(props) {
  // Destructuring props here for cleaner access
  const { name, price, calories } = props;

  const handleAddToCart = () => {
    console.log(`Added ${name} to cart.`);
    // In a real app, this would likely trigger a state update elsewhere
  };

  return (
    <div className="food-item-card">
      <h4>{name}</h4>
      <p>Price: ${price.toFixed(2)}</p>
      {calories && <p>Calories: {calories}</p>} {/* Conditionally render calories */}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default FoodItem;
