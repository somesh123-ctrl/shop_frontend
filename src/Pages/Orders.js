import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "../Css/Orders.css";
import Order_success from "./Order_success";
const Orders = (props) => {
  const navigate = useNavigate();

  const location = useLocation();
  const data = location.state?.cart;
  const price = location.state?.price;
  const name = location.state?.name;
  const email = location.state?.email;
  const address = location.state?.address;
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  console.log(price);
  // useEffect(() => {
  //   console.log(user?.email);
  //   axios
  //     .post("http://localhost:8081/order", {
  //       items: data,
  //       total: price,
  //       name,
  //       email: user?.email,
  //       address,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // });

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_QBDxd4PzN4Ck1m",
      amount: data.amount,
      currency: data.currency,

      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "https://shop-backend-j4g9.onrender.com/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    navigate("/order-success");
  };

  const handlePayment = async () => {
    try {
      const orderUrl = "https://shop-backend-j4g9.onrender.com/online_payment";
      const { data } = await axios.post(orderUrl, { amount: price });
      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
    axios
      .post("https://shop-backend-j4g9.onrender.com/order", {
        items: data,
        total: price,
        name,
        email: user?.email,
        address,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div>
          <div className="details">
            <h1>Order Details</h1>
          </div>
          <h4>
            Customer Name&nbsp;&nbsp;: &nbsp; <span>{name}</span>
          </h4>
          <h4>
            Delivery Address&nbsp;: &nbsp; <span>{address}</span>
          </h4>{" "}
          <table className="table">
            <thead>
              <tr className="tr1">
                <th> Product_Name</th>
                <th> Qty</th>
                <th> Price</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr className="tr1">
                    <td>{item.title}</td>
                    <td>{item.amount}</td>
                    <td>{item.price}</td>
                  </tr>
                );
              })}
              <th>Total&nbsp; :&nbsp; {price} $</th>
            </tbody>
          </table>
          <div className="delivery">
            <h3>Choose Payment Mode:</h3>
            <Link to="/order-success" refresh="true">
              <button className="cash_payment">Cash On Delivery</button>
            </Link>

            <button className="online_payment" onClick={handlePayment}>
              Online Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
