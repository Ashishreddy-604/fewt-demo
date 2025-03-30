import React from 'react';
import FoodItem from './FoodItem'; // Assuming FoodItem is in the same folder

function MenuList(props) {
  const { items } = props; // Destructure items from props

  if (!items || items.length === 0) {
    return <p>No menu items available.</p>;
  }

  return (
    <div>
      {items.map(item => (
        <FoodItem
          key={item.id} // Key prop is crucial for list rendering
          name={item.name}
          price={item.price}
          // Assuming calories might not always be present
          calories={item.calories}
        />
      ))}
    </div>
  );
}

export default MenuList;
