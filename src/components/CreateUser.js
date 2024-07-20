import React, { useState } from "react";
import "./createuser.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateUser = () => {
  const [pname, setPname] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const navigate = useNavigate();

  function handlesubmit(e) {
    e.preventDefault();

    const userdata = {
      productname: pname,
      price: price,
      quantity: quantity,
    };

    axios
      .post("http://localhost:8008/create/", userdata)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="top">
      <div className="gb">
        <form onSubmit={handlesubmit}>
          <h2>ADD USER</h2>
          <div className="col">
            <label htmlFor=""> PRODUCT NAME:</label>
            <input
              placeholder="Enter product name:"
              type="text"
              onChange={(e) => setPname(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="">PRICE:</label>
            <input
              placeholder="Enter Price:"
              type="text"
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="">QUANTITY:</label>
            <input
              placeholder="Enter quantity:"
              type="number"
              onChange={(e) => setQuantity(e.target.value)}
            ></input>
          </div>
          <div>
            <button className="bt">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
