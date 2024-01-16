import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Css/Users.css";
import Update from "./Update";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Users = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state) => state.user);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  const handleDelete = (id) => {
    axios
      .delete("https://shop-backend-j4g9.onrender.com/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((errr) => console.log(errr));
  };

  return (
    <div className="main2">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div>
          <table className="table table-striped">
            <thead>
              <tr className="tr1">
                <th> Name</th>

                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr className="tr1">
                <td>{user?.name}</td>

                <td>{user?.email}</td>

                <td>
                  <Link to={`/update/${user?._id}`} className="btn btn-success">
                    {" "}
                    Edit{" "}
                  </Link>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={(e) => handleDelete(user?._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Users;
