import React, { Fragment, useState } from "react";
import { Navigation } from "../Navigation";
import Scroller from "./Scroller";
import Topbar from "./Topbar";
import Map from "./Map";
import Weather from "./Weather";

const Overview = () => {
  const [city, setCity] = useState("");
  const [placeId, setPlaceId] = useState("");
  const [center, setCenter] = useState({});

  return (
    <Fragment>
      <Navigation />
      <div className="discover-wrapper">
        <Topbar />
        <Scroller setCity={setCity} />
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
