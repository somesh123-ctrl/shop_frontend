import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../Css/ProductDetails.css";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";

const ProductDetails = ({ handleClick }) => {
  const location = useLocation();
  const data = location.state;
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
        <div className="outer">
          <div className="left">
            <img className="image" src={data.image} />
          </div>
          <div className="right">
            <h1 className="title">{data.title}</h1>
            <p className="description">{data.description}</p>
            <h4>Price : ${data.price}</h4>
            <p className="rating">
              <StarRatings
                rating={data.Rate}
                starDimension="26px"
                starSpacing="1px"
                starRatedColor="red"
              />{" "}
              (52)
            </p>
            <div>
              {" "}
              <Link to="/products">
                <button className="product-button2">Back To Shopping</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
