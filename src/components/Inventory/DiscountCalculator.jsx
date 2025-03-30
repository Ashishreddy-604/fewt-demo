import React from 'react';

class DiscountCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originalPrice: 100,
      discount: 10, // Discount percentage
      finalPrice: null, // Initially null until calculated
    };
  }

  applyDiscount = () => {
    // Use the functional form of setState to access previous state reliably
    this.setState((prevState) => {
      const discountAmount = (prevState.originalPrice * prevState.discount) / 100;
      const calculatedFinalPrice = prevState.originalPrice - discountAmount;
      return {
        finalPrice: calculatedFinalPrice,
      };
    });
  }

  // Example method to change original price (for demonstration)
  increasePrice = () => {
    this.setState(prevState => ({
        originalPrice: prevState.originalPrice + 20,
        finalPrice: null // Reset final price when original changes
    }));
  }

  render() {
    const { originalPrice, discount, finalPrice } = this.state;

    return (
      <div>
        <p>Original Price: ${originalPrice.toFixed(2)}</p>
        <p>Discount: {discount}%</p>
        {finalPrice !== null && (
          <p><strong>Final Price: ${finalPrice.toFixed(2)}</strong></p>
        )}
        <button onClick={this.applyDiscount}>Apply Discount</button>
        <button onClick={this.increasePrice} style={{marginLeft: '10px'}}>Increase Price by $20</button>
      </div>
    );
  }
}

export default DiscountCalculator;
