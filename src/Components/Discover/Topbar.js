import React from "react";

const Topbar = ({data}) => {
  

  return (
    <nav className="topbar">
      <ul>
    
      <li>
          {data.subregion}
          <small className="text-muted">Region</small>
        </li>
        <li>
          <img src={data.flag} width="40" height="30" alt=" " style={{border : "1px solid black"}}></img>
          <small className="text-muted">Flag</small>
        </li>
        <li>
          {(data.population / 1000000).toFixed(1)}
          <small className="text-muted">Population, million</small>
        </li>
        <li>
          {data.capital}
          <small className="text-muted">Capital</small>
        </li>
       
       
        <li>
          <p>
            {data.currencies && data.currencies[0].name} ({data.currencies && data.currencies[0].symbol})
            <small className="text-muted">Local currency</small>
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default Topbar;
