// CartItem.js
import React from 'react';
import './cartitem.css';

const CartItem = ({ item, handleDelete }) => {
  return (
    <div className="cart-item">
      <div className="item-info">
        <h4 className="item-name">{item.name}</h4>
        <p className="item-price">₹{item.price.toFixed(2)}</p>
      </div>
      <button className="delete-btn" onClick={() => handleDelete(item.id)}>
        Delete
      </button>
    </div>
  );
};

export default CartItem;
