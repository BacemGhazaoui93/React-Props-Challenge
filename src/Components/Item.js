import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function Item({ image, name, price }) {
  return (
    <div className="item">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  )
}
Item.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Item