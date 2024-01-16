import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../Css/My_orders.css";
const My_orders = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);
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
        <div className="my_orders3">
          <h3>Dear {user?.name}</h3>
          <h1>Your Orders</h1>
          {user?.orders?.length ? (
            <div className="main0">
              {user?.orders.map((a) => {
                return (
                  <div>
                    <table className="table">
                      <thead>
                        <tr>
                          <p>Order Date: {user?.createdAt}</p>
                          <p>Name: {a.name}</p>
                          <p>Address: {a.address}</p>
                        </tr>
                        <tr className="tr1">
                          <th> Product_Name</th>
                          <th> Qty</th>
                          <th> Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {a.items.map((item) => {
                          return (
                            <tr className="tr1">
                              <td>{item.title}</td>
                              <td>{item.amount}</td>
                              <td>{item.price}</td>
                            </tr>
                          );
                        })}
                        <th>Total&nbsp; :&nbsp; {a.total} $</th>
                      </tbody>
                    </table>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="no-products">
              <h1 className="no-products1">SORRY ☹️!!!</h1>
              <h1 className="no-products2">It seems no orders Yet !!!</h1>
              <div>
                {" "}
                <Link to="/products">
                  <button className="product-button2">Back To Shopping</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default My_orders;
