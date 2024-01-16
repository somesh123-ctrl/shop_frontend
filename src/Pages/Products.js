import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../Pages/Redux/UserSlice";
import "../Css/Products.css";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const Products = ({ handleClick }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  useEffect(() => {
    axios
      .get("https://shop-backend-j4g9.onrender.com/products")
      .then((res) => setProducts(res.data));
    console.log(products);
  }, []);

  useEffect(() => {
    console.log(products);
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  useEffect(() => {
    axios
      .post(
        "https://shop-backend-j4g9.onrender.com/user/getUserData",
        { token: localStorage.getItem("token") },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => dispatch(setUser(res.data.data)));
  }, []);
  const getUser = () => {
    try {
      // dispatch(showLoading());
      const res = axios.post(
        "https://shop-backend-j4g9.onrender.com/user/getUserData",
        { token: localStorage.getItem("token") },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // dispatch(hideLoading());

      dispatch(setUser(res.data.data));
    } catch (error) {
      // localStorage.clear();
      // dispatch(hideLoading());
      console.log(error);
    }
  };

  const Truncate = (string, number) => {
    if (!string) {
      return null;
    }
    if (string.length <= number) {
      return string;
    }
    return string.slice(0, number) + "...";
  };
  return (
    <div className="main0">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div>
          <div className="wrap">
            <div className="search">
              <input
                type="text"
                className="searchTerm"
                id="input_text"
                placeholder="Search Products"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit" className="searchButton">
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
          {filteredProducts?.length ? (
            <div className="main">
              {filteredProducts.map((item) => {
                return (
                  <div className="product-card">
                    <img src={item.image} className="product-image" alt="..." />
                    <div className="product-body">
                      <h5 className="product-title">
                        {Truncate(item.title, 25)}
                      </h5>

                      <p className="product-text" style={{ maxWidth: 250 }}>
                        {Truncate(item.description, 55)}
                      </p>
                      <p className="product-price" style={{ maxWidth: 250 }}>
                        $ {item.price}
                      </p>
                      <p className="Product-text  " style={{ maxWidth: 250 }}>
                        <StarRatings
                          rating={item.Rate}
                          starDimension="16px"
                          starSpacing="1px"
                          starRatedColor="red"
                        />
                      </p>
                      <Link>
                        <button
                          className="product-button1"
                          onClick={() => handleClick(item)}
                        >
                          Add To Cart
                        </button>
                      </Link>
                      <Link to={`/products/${item._id}`} state={item}>
                        <button className="product-button2">More Info</button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="no-products">
              <h1 className="no-products1">SORRY ☹️!!!</h1>
              <h1 className="no-products2">No Products Found !!!</h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;
