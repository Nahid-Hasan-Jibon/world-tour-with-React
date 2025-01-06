import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visiteddFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = (flag) => {
    const newVisitedFlags = [...visiteddFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };
  return (
    <>
      <h1>Countries :{countries.length}</h1>

      <div>
        <h1>Visited Countries : {visitedCountries.length}</h1>
        <ul></ul>
      </div>
      {/* show flags */}
      <div className="">
        {visiteddFlags.map((flag,idx) => (
          <img key={idx} src={flag} alt="" />
        ))}
      </div>

      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
