import React, { useState } from 'react';
import './App.css';
import DailySpecial from './components/Menu/DailySpecial';
import OrderCounter from './components/Orders/OrderCounter';
import MenuList from './components/Menu/MenuList';
import InventoryForm from './components/Inventory/InventoryForm';
import AddMenuItem from './components/Menu/AddMenuItem';
import OrderDetails from './components/Orders/OrderDetails';
import DiscountCalculator from './components/Inventory/DiscountCalculator';

function CanteenApp() {
  const initialMenuItems = [
    { id: 1, name: 'Samosa', price: 1.50 },
    { id: 2, name: 'Veg Burger', price: 4.00 },
    { id: 3, name: 'Coffee', price: 2.00 },
  ];

  const [menuItems, setMenuItems] = useState(initialMenuItems);

  const handleAddItem = (newItem) => {
    // Basic ID generation (replace with better method in real app)
    const newItemWithId = { ...newItem, id: Date.now() };
    setMenuItems(prevItems => [...prevItems, newItemWithId]);
  };

  return (
    <div className="App">
      <h1>Canteen Management Dashboard</h1>
      <hr />

      <h2>2. Daily Special (JSX)</h2>
      <DailySpecial />
      <hr />

      <h2>3. Order Counter (Class Component)</h2>
      <OrderCounter />
      <hr />

      <h2>5. Menu List (Props &amp; Mapping with FoodItem)</h2>
      {/* FoodItem (4) is used within MenuList */}
      <MenuList items={menuItems} />
      <hr />

      <h2>6. Inventory Form (State &amp; Forms)</h2>
      <InventoryForm />
      <hr />

      <h2>7. Add Menu Item (Parent-Child Communication)</h2>
      <AddMenuItem onAddItem={handleAddItem} />
      <p><i>(New items will appear in the Menu List above)</i></p>
      <hr />

      <h2>8. Order Details (Destructuring Props)</h2>
      <OrderDetails orderId="ORD123" customerName="Alice" amount={25.50} />
      <hr />

      <h2>9. Discount Calculator (setState)</h2>
      <DiscountCalculator />
      <hr />

    </div>
  );
}

export default CanteenApp;
