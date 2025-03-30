import React from 'react';

class OrderCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: 0,
      totalRevenue: 0,
    };
    // Binding is necessary to make `this` work in the callback
    // Alternatively, use arrow function for the method
    this.addOrder = this.addOrder.bind(this);
  }

  addOrder(amount) {
    this.setState(prevState => ({
      orders: prevState.orders + 1,
      totalRevenue: prevState.totalRevenue + amount,
    }));
  }

  // Example usage of addOrder - you'd typically call this from another event
  simulateOrder = () => {
    const randomAmount = Math.floor(Math.random() * 10) + 1; // Random amount between 1 and 10
    this.addOrder(randomAmount);
  }

  render() {
    return (
      <div>
        <p>Total Orders: {this.state.orders}</p>
        <p>Total Revenue: ${this.state.totalRevenue.toFixed(2)}</p>
        <button onClick={this.simulateOrder}>Simulate New Order ($1-$10)</button>
      </div>
    );
  }
}

export default OrderCounter;
