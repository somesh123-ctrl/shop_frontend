import React, { useEffect, useState } from "react";
import success from "../Images/success.gif";
import "../Css/Order_success.css";
import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../Pages/Redux/AlertSlice";

import { Link, useNavigate } from "react-router-dom";
const Order_success = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  function handleClick() {
    dispatch(showLoading());

    navigate("/products");
    dispatch(hideLoading());
  }
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
        <div className="order_success">
          <img src={success} alt="" />
          <h3>Order Placed Successfully</h3>

          <button className="back_home" onClick={handleClick}>
            Back To Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Order_success;
