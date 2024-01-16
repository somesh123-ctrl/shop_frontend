import React, { useState } from "react";
import "./Navbar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icon";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge, message } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

function NavBar({ setShow, size }) {
  const [click, setClick] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  // logout funtion
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/login");
    window.location.reload();
  };
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span>Coffee Shopp</span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                🏠Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/users"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                🙎‍♂️Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/products"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                ☕Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/my_orders"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                😎My_Orders
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/cart"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                🛒cart <span className="size">{size}</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <Link
                exact
                activeClassName="active"
                className="nav-links"
                onClick={handleLogout}
              >
                👦{user?.name}
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
