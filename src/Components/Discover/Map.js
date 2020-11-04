import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
let APIurl =
  "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch";
let key = process.env.REACT_APP_GOOGLE_KEY;
console.log(process.env.REACT_APP_GOOGLE_KEY)

const Map = ({ city, setPlaceId, center, setCenter }) => {
  const [zoom, setZoom] = useState(2);

  useEffect(() => {
    if (city) {
      fetch(`${APIurl}/json?query=${city}&language=en&key=${key}`)
        .then((res) => res.json())
        .then((data) => {
          data &&
          setCenter(data.results[0].geometry.location);
          setZoom(10);
          setPlaceId(data.results[0].place_id);
        });
    }
  }, [city]);

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key }}
        center={center}
        defaultZoom={2}
        zoom={zoom}
        heignt="400"
        width="600"
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
