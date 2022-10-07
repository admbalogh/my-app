import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}ºC`
    );
  }
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=c6d9f7aef9ff8091de9eeba09c596035&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <Audio
      height="100"
      width="100"
      color="orange"
      ariaLabel="audio-loading"
      wrapperStyle={{}}
      wrapperClass="wrapper-class"
      visible={true}
    />
  );
}
export default Weather;
