import "./country.css";
import { useState } from "react";

const Country = ({ country , handleVisitedCountry }) => {
  const { name, flags, population ,area,cca3 } = country;

  const [visited, setVisited] =useState(false)

  const handleVisited=()=>{
    setVisited(!visited)
  }
  console.log(handleVisitedCountry)

  return (
    <div className={`country , ${visited && 'visited'}`}>
      <h3 style={{color: visited? 'blue':"black"}}>Name: {name.common}</h3>
      <img className="flag" src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>Code: {cca3}</p>
      <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
      <br />
      <button onClick={handleVisited} className="btn">{visited? 'Visited': 'Going'}</button>
      <br />
      { visited ?'I have visited this country .' :'I want to visit'}
    </div>
  );
};

export default Country;
