import React from 'react';

class InventoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: '',
      quantity: 0,
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'number' ? parseInt(target.value, 10) : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log('Inventory Form Submitted:', this.state);
    // In a real app, you'd likely call a prop function
    // to update parent state or send data to an API
    // e.g., this.props.onAddItem(this.state);

    // Optionally clear the form
    // this.setState({ itemName: '', quantity: 0 });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="itemName">Item Name: </label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={this.state.itemName}
            onChange={this.handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity: </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleInputChange}
            min="0" // Prevent negative numbers
            required
          />
        </div>
        <button type="submit">Add/Update Inventory</button>
      </form>
    );
  }
}

export default InventoryForm;
