import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CountriesList from './CountriesList';

const CountryDetails = ({ countries }) => {
  const params = useParams();
  const { alpha3Code } = params;

  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log(data);
        setCountry(data);
      });
  }, [alpha3Code]);

  return (
    <div>
      {/* <CountriesList countries={countries} /> */}
      {/* <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
        alt={country.name.common}
      /> */}
      <h1>{country.name.common}</h1>
      <p>Capital: {`${country.capital[0]}`}</p>
      <p>
        Area: {`${country.area}`} km<sup>2</sup>
      </p>
      <p>Border: {country.borders.map((border) => border)}</p>
    </div>
  );
};

export default CountryDetails;
