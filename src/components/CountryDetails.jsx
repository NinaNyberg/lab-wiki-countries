import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CountryDetails = () => {
  const { id } = useParams();

  const [country, setCountry] = useState(null);

  //   const country = countries.find((item) => item.alpha3Code === id);

  useEffect(() => {
    fetch(`https://ih-countries-api.herokuapp.com/countries/${id}`)
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log(data);
        setCountry(data);
      });
  }, [id]);

  //  https://ih-countries-api.herokuapp.com/countries/USA

  return (
    <div>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
        alt={country.name.common}
      />
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital[0]}</p>
      <p>
        Area: {country.area} km<sup>2</sup>
      </p>
      <p>
        Border:
        <ul>
          {country.borders.map((countryCode) => (
            <li key={countryCode}>
              <Link to={`/${countryCode}`}>{countryCode}</Link>
            </li>
          ))}
        </ul>
      </p>
    </div>
  );
};

export default CountryDetails;
