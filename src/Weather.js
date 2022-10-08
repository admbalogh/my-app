import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function Weather(props) {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState("");
  const [weather, setWeather] = useState("null");

  function displayTemperature(response) {
    console.log(response);
    setLoaded(true);
    setWeather({
      name: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c6d9f7aef9ff8091de9eeba09c596035&units=metric`;
    axios.get(url).then(displayTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city" onChange={updateCity} />
      <input type="submit" value="search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <h4> The weather today in {weather.name}</h4>
          <li>Temperature: {Math.round(weather.temperature)} ºC</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity} %</li>
          <li>Wind: {Math.round(weather.wind)} km/h</li>
          <img src={weather.icon} alt="Weather icon" />
        </ul>
      </div>
    );
  } else {
    return form;
  }
}

export default Weather;
