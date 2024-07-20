import React from "react";
import "./user.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const User = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8008/")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })

      .catch((err) => console.log(err));
  }, []);

  function handleDelete(id) {
    axios
      .delete("http://localhost:8008/deleteuser/" + id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="top">
      <div className="bg">
        <Link to="/create" className="btn">
          ADD +
        </Link>
        <table className="table">
          <tr>
            <th>ProductName</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
          <tbody>
            {data.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.productname}</td>
                  <td>{user.price}</td>
                  <td>{user.quantity}</td>
                  <td>
                    <Link to={`/edit/${user._id}`}>UPDATE</Link>
                    <button onClick={() => handleDelete(user._id)}>
                      DELETE
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
