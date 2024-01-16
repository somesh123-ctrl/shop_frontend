import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Css/Form.css";

const Update = () => {
  const { id } = useParams();
  console.log(id);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://shop-backend-j4g9.onrender.com/getuser/" + id)
      .then((result) => {
        console.log(result);
        setName(result.data.name);

        setEmail(result.data.email);
      })
      .catch((err) => console.log(err));
  }, []);

  const userUpdate = (e) => {
    e.preventDefault();
    axios
      .put("https://shop-backend-j4g9.onrender.com/update/" + id, {
        name,

        email,
      })
      .then((res) => {
        console.log(res);
        navigate("/users");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-container ">
      <form onSubmit={userUpdate} className="register-form">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            placeholder="Enter email"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
