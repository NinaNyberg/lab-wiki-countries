// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
// import countriesData from './countries.json';
import CountryDetails from './components/CountryDetails';
import { useState, useEffect } from 'react';

function App() {
  // const [countries, setCountriesList] = useState(countriesData);

  // useEffect(() => {
  //   setCountriesList(countries);
  // }, [countries]);

  const [countries, setCountriesList] = useState([]);

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountriesList(data);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col">
            <CountriesList countries={countries} />
          </div>

          <div className="col">
            <Routes>
              <Route path="/:id" element={<CountryDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
