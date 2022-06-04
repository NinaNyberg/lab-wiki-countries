import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {countries.map((country) => (
          <li key={country.alpha3Code}>
            <Link to={`/${country.alpha3Code}`}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={country.name.common}
                style={{ width: '20px' }}
              />
              {country.name.common}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;
