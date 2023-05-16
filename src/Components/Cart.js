import React from 'react';
import PropTypes from 'prop-types';

function Cart({ product, onAddToCart }) {
  const handleClick = () => {
    onAddToCart(product);
  };

  return (
    <div className="cart">
      <h3>{product.name}</h3>
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  );
}

Cart.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
Cart.defaultProps = {
    product: {
      name: 'Product',
      price: '0 Dt',
    },
    onAddToCart: () => {},
  };
  
  Cart.propTypes = {
    product: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }),
    onAddToCart: PropTypes.func,
  };

export default Cart