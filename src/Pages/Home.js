import React, { useEffect, useState } from "react";
import slide1 from "../Images/slide1.jpg";
import slide2 from "../Images/slide2.jpg";
import slide3 from "../Images/slide3.jpg";
import zomato from "../Images/zomato.png";
import swiggy from "../Images/swiggy.png";
import starbucks from "../Images/starbucks.jpg";
import { Link } from "react-router-dom";
import "../Css/Home.css";
const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <div className="home">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div>
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={slide2} className="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <Link to="/products">
                    <button className="button1">GO TO PRODUCTS 🍵</button>
                  </Link>
                </div>
              </div>
              <div className="carousel-item">
                <img src={slide1} className="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <Link to="/products">
                    <button className="button1">GO TO PRODUCTS 🍵</button>
                  </Link>
                </div>
              </div>
              <div className="carousel-item">
                <img src={slide3} className="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <Link to="/products">
                    <button className="button1">GO TO PRODUCTS 🍵</button>
                  </Link>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className="container">
            <h5 className="section-title h1">TODAY'S OFFERS !!!!!!!!!!!!!!</h5>
            <div className="row">
              {/* Team member */}
              <div className="card1 col-xs-12  col-md-4">
                <div
                  className="image-flip"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card-offer">
                        <div className="card-body text-center">
                          <p>
                            <img
                              className=" img-fluid"
                              src={zomato}
                              alt="card image"
                            />
                          </p>
                          <h4 className="card-title">Flat 50% OFF</h4>
                          <p className="card-text">
                            This is basic card with image on top, title,
                            description and button.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card-offer">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">ZOMATO</h4>
                          <p className="card-text">
                            Zomato coupons & promo code, offers upto 50% off on
                            online food orders. Enjoy dine-ins, takeaways and
                            home deliveries from your favourite restaurants with
                            special offers. Zomato is offering a flat 50% off on
                            online food orders worth ₹ 159 and above. To get the
                            discount, apply the Zomato promo code WELCOME50.
                          </p>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="#"
                              >
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="#"
                              >
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="#"
                              >
                                <i className="fa fa-skype" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="#"
                              >
                                <i className="fa fa-google" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ./Team member */}
              <div className="card2 col-xs-12  col-md-4">
                <div
                  className="image-flip"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card-offer">
                        <div className="card-body text-center">
                          <p>
                            <img
                              className=" img-fluid"
                              src={swiggy}
                              alt="card image"
                            />
                          </p>
                          <h4 className="card-title">Flat 30% OFF</h4>
                          <p className="card-text">
                            This is basic card with image on top, title,
                            description and button.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card-offer">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">SWIGGY</h4>
                          <p className="card-text">
                            Zomato coupons & promo code, offers upto 50% off on
                            online food orders. Enjoy dine-ins, takeaways and
                            home deliveries from your favourite restaurants with
                            special offers. Zomato is offering a flat 50% off on
                            online food orders worth ₹ 159 and above. To get the
                            discount, apply the Zomato promo code WELCOME50.
                          </p>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="#"
                              >
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="#"
                              >
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="#"
                              >
                                <i className="fa fa-skype" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="#"
                              >
                                <i className="fa fa-google" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Team member */}
              <div className="card3 col-xs-12  col-md-4">
                <div
                  className="image-flip"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card-offer">
                        <div className="card-body text-center">
                          <p>
                            <img
                              className=" img-fluid"
                              src={starbucks}
                              alt="card image"
                            />
                          </p>
                          <h4 className="card-title">Flat 12% OFF</h4>
                          <p className="card-text">
                            This is basic card with image on top, title,
                            description and button.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card-offer">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">STARBUCKS</h4>
                          <p className="card-text">
                            Zomato coupons & promo code, offers upto 50% off on
                            online food orders. Enjoy dine-ins, takeaways and
                            home deliveries from your favourite restaurants with
                            special offers. Zomato is offering a flat 50% off on
                            online food orders worth ₹ 159 and above. To get the
                            discount, apply the Zomato promo code WELCOME50.
                          </p>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="#"
                              >
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="#"
                              >
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="#"
                              >
                                <i className="fa fa-skype" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href="#"
                              >
                                <i className="fa fa-google" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
