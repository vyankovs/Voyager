import React, { useState, useLayoutEffect, useEffect } from "react";
import Radium from "radium";

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  
  while (0 !== currentIndex) {
    
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const Scroller = Radium(({ setCity, capital, country, code }) => {
  const [selected, setSelected] = useState("");
  const [cities, setCities] = useState([]);
  const [fullCitiesList, setFullCitiesList] = useState([]);
  const ref = React.createRef();
  let coun = country.charAt(0).toUpperCase() + country.slice(1);

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
    fetch(
      "https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json"
    )
      .then((response) => response.json())
      .then((data) => {
        let shuffled = shuffle(data[coun])
        setCities(shuffled);
        setFullCitiesList(shuffled)
       
      });
  }, [code]);

  useLayoutEffect(() => {
    setCity(capital);
    setSelected(capital);
  }, [capital]);

 const handleInput = (e) => {
  let filtered;
if(e.target.value){
filtered = fullCitiesList.filter(city=>city.toUpperCase().includes(e.target.value.toUpperCase()));

} else{
  filtered = fullCitiesList;
}

setCities(filtered)
 }

  return (
    <div style={{padding:"20px 0", textAlign:"center"}}>
    <input style={{border:"3px solid rgb(0 130 156)", borderRadius:"5px"}} placeholder="Search city" onInput = {handleInput} />
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
    </div></div>
  );
});

export default Scroller;
