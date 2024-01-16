import React, { useEffect, useState } from "react";
import "../Css/Address.css";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
const Address = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const location = useLocation();
  const data = location.state?.cart;
  const price = location.state?.price;
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
        <div className="row">
          <div className="col-75">
            <div className="container">
              <div className="row">
                <div className="col-50">
                  <h3>Billing Address</h3>
                  <label htmlFor="fname">
                    <i className="fa fa-user" /> Full Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="John M. Doe"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="email">
                    <i className="fa fa-envelope" /> Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="adr">
                    <i className="fa fa-address-card-o" /> Address
                  </label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="Enter Address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <label>
                <input
                  type="checkbox"
                  defaultChecked="checked"
                  name="sameadr"
                />{" "}
                Shipping address same as billing
              </label>
              <Link
                to="/orders"
                state={{
                  cart: data,
                  price: price,
                  name: name,
                  address: address,
                  email: email,
                }}
              >
                <button className="product-button2">Proceed</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Address;
