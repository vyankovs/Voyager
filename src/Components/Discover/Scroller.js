import React, { useState, useLayoutEffect, useEffect } from "react";
import Radium from "radium";


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
  
  // Pick a remaining element...
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;
  
  // And swap it with the current element.
  temporaryValue = array[currentIndex];
  array[currentIndex] = array[randomIndex];
  array[randomIndex] = temporaryValue;
  }
  
  return array;
  }


const Scroller = Radium(({ setCity, capital, country, code }) => {
  const [selected, setSelected] = useState("");
  const [cities, setCities] = useState([]);
  const ref = React.createRef();
  let coun = country.charAt(0).toUpperCase() + country.slice(1)

  const handleScroll = (e) => {
    let element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  useEffect(() => {
fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json').then(response => 
    response.json()
).then(data=>{
   
setCities(shuffle(data[coun]))}
)

  
},
   [code]);


  useLayoutEffect(() => {
    setCity(capital);
    setSelected(capital);
  }, [capital]);

  return (
    <div className="timeline">
      <ul>
        {[capital, ...cities].map((city, key) => (
          <li key={key} ref={ref} onScroll={handleScroll}>
            <a
              key={key}
              style={{
                fontSize: selected === city ? "20px" : "16px",
                fontWeight: selected === city ? "bold" : "normal",
                ":hover": { fontSize: "20px" },
              }}
              onClick={() => {
                setCity(city);
                setSelected(city);
              }}
            >
              {city}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Scroller;
