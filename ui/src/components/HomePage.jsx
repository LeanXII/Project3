import SearchLocation from "./SearchLocation.jsx";
import SuggestedLocations from "./SuggestedLocations.jsx";




import "../stylesheets/App.css";

function HomePage() {

  return  (
    <div className="App">
      <h1>Location Search</h1>
      <div className="suggestion-dashboard">
        <SuggestedLocations />
      </div>
      <SearchLocation />
    </div>
  )

}

export default HomePage;
