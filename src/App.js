import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import Header from "./Layout/Header";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Footer from "./Layout/Footer";
import Cart from "./Pages/Cart";
import Update from "./Pages/Update";
import Popup from "reactjs-popup";
import Orders from "./Pages/Orders";
import Address from "./Pages/Address";
import Order_success from "./Pages/Order_success";
import Online_payment from "./Pages/Online_payment";
import My_orders from "./Pages/My_orders";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import PublicRoute from "./Pages/Public_Route";
import ProtectedRoute from "./Pages/Protected_Route";
import Spinner from "./Layout/Spinner";
import { useSelector } from "react-redux";
import Navbar from "./demo/Navbar";
import NavBar from "./demo/Navbar";
function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const { loading } = useSelector((state) => state.alerts);

  const handleClick = (item) => {
    const isFound = cart.some((element) => {
      if (element._id === item._id) {
        return true;
      }

      return false;
    });

    if (isFound) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <div className="App">
      <Header setShow={setShow} size={cart.length} />
      {loading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="users"
            element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            }
          />
          <Route
            path="update/:id"
            element={
              <ProtectedRoute>
                <Update />
              </ProtectedRoute>
            }
          />
          <Route
            path="products"
            element={<Products handleClick={handleClick} />}
          />

          <Route
            path="cart"
            element={
              <ProtectedRoute>
                <Cart
                  cart={cart}
                  setCart={setCart}
                  handleChange={handleChange}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/address"
            element={
              <ProtectedRoute>
                <Address />
              </ProtectedRoute>
            }
          />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route
            path="/order-success"
            element={
              <ProtectedRoute>
                <Order_success />
              </ProtectedRoute>
            }
          />
          <Route
            path="/online-payment"
            element={
              <ProtectedRoute>
                <Online_payment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my_orders"
            element={
              <ProtectedRoute>
                <My_orders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
        </Routes>
      )}
      <Footer />
    </div>
  );
}

export default App;
