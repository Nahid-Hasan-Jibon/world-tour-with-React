import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[])

  const handleVisitedCountry=(country)=> {
    console.log('add this to your visited country')
    console.log(country)

  }
  return (
    <>
    <h1>Countries :{countries.length}</h1>

    <div>
        <h1>Visited Countries</h1>
        <ul>

        </ul>

    </div>

    <div className="country-container">
      
      {
        countries.map(country=><Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} country={country}></Country>)
      }

    </div>
    </>
  );
};

export default Countries;
