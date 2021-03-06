import React, { Fragment, useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import { Navigation } from "../Navigation";
import Scroller from "./Scroller";
import Topbar from "./Topbar";
import Map from "./Map";
import Weather from "./Weather";


const Overview = () => {
  const [city, setCity] = useState("");
  const [placeId, setPlaceId] = useState("");
  const [center, setCenter] = useState({});
  const {country} = useParams();
  const [data, setData] = useState({});
  const [code,setCode] = useState('')
 

  useEffect(() => {
    if (country) {
      fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data[0]);
          setCode(data[0].alpha2Code)
          console.log(data) 
          console.log(data[0].alpha2Code)    
        });
    }
  }, [country]);

  return (
    <Fragment>
      <Navigation country = {country} />
      <div className="discover-wrapper">
        <Topbar data = {data} />
        <Scroller setCity={setCity} capital = {data.capital} country = {country} code={code}/>
        <Map
          city={city}
          setPlaceId={setPlaceId}
          center={center}
          setCenter={setCenter}
        />
        <Weather placeId={placeId} center={center} />
      </div>
    </Fragment>
  );
};

export default Overview;
