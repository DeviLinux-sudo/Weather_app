// 0e599ccc57f96e0b072b77df9798ec3d
// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=47ca7e8318ed88b0ddb67570ec6f75ac

import React, { useState, useEffect } from "react";
import Weathercard from "./Weathercard";
import "./style.css";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("pune");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=47ca7e8318ed88b0ddb67570ec6f75ac`;

      let res = await fetch(url);
      let data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <div>
      <div className="body">
        <div className="wrap">
          <div className="search">
            <input
              type="search"
              placeholder="search..."
              autoFocus
              id="search"
              className="searchTerm"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />

            <button
              className="searchButton"
              type="button"
              onClick={getWeatherInfo}
            >
              Search
            </button>
          </div>
        </div>
        {/* our temp card  */}
        <Weathercard {...tempInfo} />
      </div>
      <div className="clouds">
        <img
          src="cloud1.png"
          alt=""
          style={{
            animation: "cld calc(8s * 1) linear infinite",
            opacity: "0.38",
            maxWidth: "60%",
            position: "fixed",
            bottom: "3px",
          }}
        ></img>
        <img
          src="cloud2.png"
          alt=""
          style={{
            animation: "cld calc(8s * 2) linear infinite",
            opacity: "0.38",
            maxWidth: "60%",
            position: "fixed",
            bottom: "3px",
          }}
        ></img>
        <img
          src="cloud3.png"
          alt=""
          style={{
            animation: "cld calc(8s * 3) linear infinite",
            opacity: "0.38",
            maxWidth: "60%",
            position: "fixed",
            bottom: "3px",
          }}
        ></img>
        <img
          src="cloud4.png"
          alt=""
          style={{
            animation: "cld calc(8s * 4) linear infinite",
            opacity: "0.38",
            maxWidth: "60%",
            position: "fixed",
            bottom: "3px",
          }}
        ></img>
        <img
          src="cloud5.png"
          alt=""
          style={{
            animation: "cld calc(8s * 5) linear infinite",
            opacity: "0.38",
            maxWidth: "60%",
            position: "fixed",
            bottom: "3px",
          }}
        ></img>
      </div>
    </div>
  );
};

export default Temp;
