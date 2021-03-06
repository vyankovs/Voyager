import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
let APIurl =
  "https://cors.bridged.cc/https://maps.googleapis.com/maps/api/place/textsearch";
let key = process.env.REACT_APP_GOOGLE_KEY;


const Map = ({ city, setPlaceId, center, setCenter }) => {
  const [zoom, setZoom] = useState(2);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (city) {
      setLoading(true);
      fetch(`${APIurl}/json?query=${city}&language=en&key=${key}`)
      .then((res) => {
        console.log(res)
        return res.json()})
        .then((data) => {
          data && data.results[0] &&
          setCenter(data.results[0].geometry.location);
          console.log(data)
          setZoom(12);
          data.results[0] && setPlaceId(data.results[0].place_id);
          setLoading(false)
        }).catch(err=> console.log(err))
    }
  }, [city]);

  return (
    <div className="map" >
   { loading? 
   <div style={{padding:"100px 0", textAlign:"center"}}><iframe src="https://i.stack.imgur.com/qq8AE.gif" width="180" height="180" frameBorder="0" className="giphy-embed"  ></iframe></div>
   :
      <GoogleMapReact
        bootstrapURLKeys={{ key }}
        center={center}
        defaultZoom={2}
        zoom={zoom}
      
      ></GoogleMapReact>
   }
    </div>
  );
};

export default Map;
