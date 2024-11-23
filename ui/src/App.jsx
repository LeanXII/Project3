
import SearchLocation from "./components/SearchLocation.jsx";
import SuggestedLocations from './components/suggestedLocations.jsx'




function App() {

  return (
    <div className="App">
      <h1>Location Search</h1>
      <SuggestedLocations />
      <SearchLocation />
    </div>
  );
}

export default App;
