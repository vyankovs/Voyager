import React, { useEffect, useState } from "react";
import { FaCloudSunRain } from "react-icons/fa";

let APIurl =
  "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details";
let PhotoAPI = "https://maps.googleapis.com/maps/api/place/photo";
let key = "AIzaSyDPUOSET_JlnAy_G8T1AFnMkExbJrz4UmE";

const Weather = ({ placeId, center }) => {
  const [photos, setPhotos] = useState([]);
  // const [temperature, setTemperature] = useState("");
  // const [icon, setIcon] = useState("");
  const [weatherObj, setWeatherObj] = useState(null);

  useEffect(() => {
    console.log(center);
    if (placeId) {
      fetch(`${APIurl}/json?key=${key}&place_id=${placeId}&fields=photos`)
        .then((data) => data.json())
        .then((imgs) => setPhotos(imgs.result.photos));
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${center.lat}&lon=${center.lng}&appid=98cb06cb2b40f453cd89033992ff765a&units=metric`
      )
        .then((data) => data.json())
        .then((weather) => {
          // setTemperature(Math.floor(weather.main.temp));
          // setIcon(weather.weather[0].icon);
          setWeatherObj(weather);
        });
    }
  }, [placeId]);
  return (
    <div className="weather">
      <div className="photos">
        <p>Photos of the city</p>
        <div>
          {photos.slice(0, 9).map((photo, k) => (
            <img
              key={k}
              src={`${PhotoAPI}?&key=${key}&photoreference=${photo.photo_reference}&maxheight=200`}
            />
          ))}
        </div>
      </div>
      <div className="forecast">
        <p>Weather</p>
        {weatherObj ? (
          <div className="forecast-grid">
            <img
              src={`http://openweathermap.org/img/w/${weatherObj.weather[0].icon}.png`}
            ></img>
            <p>{Math.floor(weatherObj.main.temp)}°C </p>
            <small className="text-muted">
              {weatherObj.weather[0].description}{" "}
            </small>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Weather;
// ChIJBUVa4U7P1EAR_kYBF9IxSXY

//CkQ0AAAA1Yzg1ABq64kwJ9DN50fE_xZe9XHKF-tPCYHdPgO7PfBnkSbeeDonPwKpcf5wTRpgE_C7Bctu3jVSb9ozRARwGhIQwtE10z0UFwG0_zNyxnibCRoUFLBGZ87cmhlfwBsfe-bRbREPIvk
