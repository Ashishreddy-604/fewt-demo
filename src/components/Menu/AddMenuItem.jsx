import React, { useState } from 'react';

function AddMenuItem({ onAddItem }) { // Destructure the callback prop
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !price) {
      alert('Please enter both name and price.');
      return;
    }
    // Call the parent's function passed as a prop
    onAddItem({ name, price: parseFloat(price) });

    // Clear the form
    setName('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add New Menu Item</h4>
      <div>
        <label htmlFor="newItemName">Name: </label>
        <input
          type="text"
          id="newItemName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="newItemPrice">Price: </label>
        <input
          type="number"
          id="newItemPrice"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          step="0.01" // Allow decimal prices
          min="0"
          required
        />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddMenuItem;
