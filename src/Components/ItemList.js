import React from 'react';
import Item from './Components/Item';
import PropTypes from 'prop-types';

function ItemList({ products }) {
  return (
    <div className="item-list">
      {products.map((product, index) => (
        <Item key={index} {...product} />
      ))}
    </div>
  );
}

ItemList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ItemList