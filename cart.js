// Cart.js
import React, { useState } from 'react';
import CartItem from './cartitem';
import styles from './cart.module.css';
import Payment from './Payment';
// import SideBar from "../UI/SideBar";
import { useNavigate } from "react-router-dom";

const Cart = ({ handleBackToCourses }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Data Structure', price: 10.99 },
    { id: 2, name: 'AVP', price: 19.99 },
    { id: 3, name: 'Machine Learning', price: 7.99 },
  ]);
  const url = sessionStorage.getItem("role")
  console.log(url);
  const attributes = [
    {
      name: "Course",
      link: "/coursePage",
    },
    {
      name: "Cart",
      link: "/Cart",
    },
    {
      name: "Profile",
      link: "/Profile",
    },

    {
      name: "Home",
      link: `/${url}`,
    },
  ];
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price;
    });
    return total.toFixed(2);
  };

  const handleDelete = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const [showPayment, setShowPayment] = useState(false);

  const handlePay = () => {
    setShowPayment(true);
  };

  const handleBackToCart = () => {
    setShowPayment(false);
  };
  let navigate = useNavigate();

  if (showPayment) {
    return (
      <>
        {/* <SideBar attributeList={attributes} /> */}
        <Payment handleBackToCart={handleBackToCart} />
       
      </>
    );
  }

  return (
    <>
      {/* <SideBar attributeList={attributes} /> */}
      <center>
        <div className={[styles.body]}>
          <div className={styles['cart-container']}>
            <h1 className={styles['cart-title']}>Shopping Cart</h1>
            <div className={styles['cart-items']}>
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    handleDelete={handleDelete}
                    styles={styles} // Pass the styles object to the CartItem component
                  />
                ))
              ) : (
                <p className={styles['empty-cart']}>Your cart is empty.</p>
              )}
            </div>
            {cartItems.length > 0 && (
              <h3 className={styles['cart-total']}>Total: ₹{calculateTotal()}</h3>
            )}
            <div className={styles['cart-buttons']}>
              <button
                className={`${styles['cart-button']} ${styles['back-button']}`}
                onClick={() => navigate("/coursePage")}
              >
                Back to Courses
              </button>
              {cartItems.length > 0 && (
                <button className={`${styles['cart-button']} ${styles['pay-button']}`} onClick={handlePay}>
                  Pay
                </button>
              )}
            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default Cart;
