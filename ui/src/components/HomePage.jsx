import SearchLocation from "./SearchLocation.jsx";
import SuggestedLocations from "./SuggestedLocations.jsx";
import backgroundImage from '../assets/bbaf850c-4043-468a-a5bd-05645f4a8c41.webp';
import RocketLogo from '../assets/RocketLogo.webp'

import "../stylesheets/App.css";

function HomePage() {

  return (
    <div className="App">
      <h1 className="main-heading">
        <img 
          src={RocketLogo} 
          alt="Rocket Logo" 
          className="logo"
        />
        'Adventure is out there!'
      </h1>
      <SearchLocation />
      <div className="suggestion-dashboard">
        <SuggestedLocations />
      </div>
    </div>
  );
  
}

export default HomePage;
