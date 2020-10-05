import React, { useState, useLayoutEffect } from "react";
import Radium from "radium";

import Reveal from "react-reveal";

const cities = [
  "Antwerp",
  "Ghent",
  "Charleroi",
  "Liège",
  "Brussels",
  "Bruges",
  "Namur",
  "Leuven",
  "Mons",
];

const Scroller = Radium(({ setCity }) => {
  const [selected, setSelected] = useState("");
  const ref = React.createRef();

  const handleScroll = (e) => {
    let element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  useLayoutEffect(() => {
    setCity(cities[0]);
    setSelected(cities[0]);
  }, []);

  return (
    <div className="timeline">
      <ul>
        {cities.map((city, key) => (
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
