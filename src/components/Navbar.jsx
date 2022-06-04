import { Link } from 'react-router-dom';
import CountriesList from './CountriesList';

const Navbar = () => {
  return (
    <div>
      <Link to="/" element={<CountriesList />}>
        LAB - WikiCountries
      </Link>
    </div>
    // <nav
    //   style={{
    //     backgroundColor: 'blue',
    //     color: 'white',
    //     padding: '10px 0',
    //     textAligh: 'left',
    //   }}
    // >
    //   <h1>LAB - WikiCountries</h1>
    // </nav>
  );
};

export default Navbar;
