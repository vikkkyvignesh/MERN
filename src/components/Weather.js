import axios from "axios";
import React, { useState } from "react";

const key = "2a6e6b6f1493fb470890e2abec6d5f27";

const Weather = () => {
  const [sea, setSea] = useState("");
  const [data, setData] = useState([]);
  const fetch = async () => {
    try {
      const resp = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${sea}&appid=${key}`
      );
      console.log(resp.data);
      setData(resp.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Weather App</h1>
      <input type="text" value={sea} onChange={(e) => setSea(e.target.value)} />
      <button onClick={fetch}>Click</button>
      <div>
        <ul>
          <li> {data.name}</li>
          <li>{data.sys.country}</li>
          <li>{Math.round(data.main.temp) + "*C"}</li>
          <li>{data.coord.lat}</li>
          <li>{data.main.humidity}</li>
          <li>{data.wind.speed}</li>
        </ul>
      </div>
    </div>
  );
};

export default Weather;
