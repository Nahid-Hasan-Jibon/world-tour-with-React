import "./country.css";
import { useState } from "react";

const Country = ({ country }) => {
  const { name, flags, population ,area,cca3 } = country;

  const [visited, setVisited] =useState(false)

  const handleVisited=()=>{
    setVisited(!visited)
  }

  return (
    <div className="country">
      <h3>Name: {name.common}</h3>
      <img className="flag" src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>Code: {cca3}</p>
      <button onClick={handleVisited} className="btn">{visited? 'Visited': 'Going'}</button>
      { visited ?'I have visited this country .' :'I want to visit'}
    </div>
  );
};

export default Country;
