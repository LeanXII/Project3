import SearchLocation from "./SearchLocation.jsx";
import SuggestedLocations from "./SuggestedLocations.jsx";
import backgroundImage from '../assets/bbaf850c-4043-468a-a5bd-05645f4a8c41.webp';



import "../stylesheets/App.css";

function HomePage() {

  return  (
    <div className="App">
      <h1 className="main-heading">User Home and Location Search</h1>
      <SearchLocation />
      <div className="suggestion-dashboard">
        <SuggestedLocations />
      </div>
    </div>
  )
}

export default HomePage;
