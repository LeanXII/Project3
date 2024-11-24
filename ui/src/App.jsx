import SearchLocation from "./components/SearchLocation.jsx";
import SuggestedLocations from "./components/SuggestedLocations.jsx";
import "./stylesheets/App.css";

function App() {
  return (
    <div className="App">
      <h1>Location Search</h1>
      <div className = "suggestion-dashboard">
        <SuggestedLocations />
      </div>
      <SearchLocation />
    </div>
  );
}

export default App;
