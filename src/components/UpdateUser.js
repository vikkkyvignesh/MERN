import React, { useEffect } from "react";
import { useState } from "react";
import "./updateuser.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const UpdateUser = () => {
  const { id } = useParams();
  const [pname, setPname] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get("http://localhost:8008/get/" + id);
        console.log(resp.data);
        setPname(resp.data.productname);
        setPrice(resp.data.price);
        setQuantity(resp.data.quantity);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  function handlesubmit(e) {
    e.preventDefault();
    const userdata = {
      productname: pname,
      price: price,
      quantity: quantity,
    };
    axios
      .put("http://localhost:8008/update/" + id, userdata)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="top">
      <div className="gb">
        <form onSubmit={handlesubmit}>
          <h2>EDIT PRODUCTS</h2>
          <div className="col">
            <label htmlFor="">PRODUCT NAME:</label>
            <input
              placeholder=""
              type="text"
              value={pname}
              onChange={(e) => setPname(e.target.value)}
            ></input>
          </div>
          <div className="col">
            <label htmlFor="">PRICE:</label>
            <input
              placeholder=""
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </div>
          <div className="col">
            <label htmlFor="">QUANTITY:</label>
            <input
              placeholder=""
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            ></input>
          </div>
          <div>
            <button className="bt">UPDATE</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
