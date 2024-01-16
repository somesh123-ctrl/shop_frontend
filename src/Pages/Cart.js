import React, { useState, useEffect } from "react";
import "../Css/Cart.css";
import { Link } from "react-router-dom";
const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item._id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div>
          {cart.map((item) => {
            return (
              <div className="product-card">
                <img src={item.image} className="product-image" alt="..." />
                <div className="product-body">
                  <h5 className="product-title">{item.title}</h5>

                  <p className="product-price" style={{ maxWidth: 250 }}>
                    $ {item.price}
                  </p>
                  <div>
                    <button
                      className="qty2"
                      onClick={() => handleChange(item, -1)}
                    >
                      -
                    </button>
                    <button className="qty">{item.amount}</button>

                    <button
                      className="qty1"
                      onClick={() => handleChange(item, 1)}
                    >
                      +
                    </button>
                    <button
                      className="cart-button1"
                      onClick={() => handleRemove(item._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="total">
            <span>Total Price of your Cart ::</span>
            <span className="no-products1"> {price} $</span>
            <Link to="/address" state={{ cart: cart, price: price }}>
              <button className="product-button2">Proceed To Order</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
