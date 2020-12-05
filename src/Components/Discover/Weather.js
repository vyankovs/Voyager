import React, { useEffect, useState } from "react";
import ModalPhoto from "./ModalPhoto.js"



let APIurl =
  "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details";
let PhotoAPI = "https://maps.googleapis.com/maps/api/place/photo";
let key = process.env.REACT_APP_GOOGLE_KEY;

const Weather = ({ placeId, center }) => {
  const [photos, setPhotos] = useState([]);
  const [weatherObj, setWeatherObj] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState("");

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
        
          setWeatherObj(weather);
        });
    }
  }, [placeId]);
  return (
    <div className="weather">
      <div className="photos">
        <p>Photos of the city</p>
       
       { photos ? 
        <div>
        {photos.slice(0, 9).map((photo, k) => (
            <img
            onClick= {()=>{
              setModalOpen(true);
              setModalImg(photo.photo_reference)
              }}
              key={k}
              src={`${PhotoAPI}?&key=${key}&photoreference=${photo.photo_reference}&maxheight=100&maxwidth=100`}
            />
          )) }
          </div>
          : <img style = {{height:"300px", width:"300px"}} src={"https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg"}></img>}
        
      </div>

       <ModalPhoto show={modalOpen} handleClose={()=>setModalOpen(false)} photo={modalImg} photos={photos} keyAPI={key} PhotoAPI={PhotoAPI}/>

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

