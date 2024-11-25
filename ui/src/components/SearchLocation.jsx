import React from 'react';
import '../stylesheets/SearchLocations.css';



function SearchLocation() {
  const [searchText, setSearchText] = React.useState('');
  const [searchResults, setSearchResults] = React.useState(null);
  const [previousSearches, setPreviousSearches] = React.useState([]);

  function handleSearchButton(event) {
    event.preventDefault();

    const searchUrl = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${searchText}`;

    fetch(searchUrl, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'd227ab3bdfmsh384e9f6c4cdd58ap165d02jsn5402cbec7415',
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
      },
    })
      .then(response => response.json())
      .then(data => {
        const filterResults = data.data.filter(city => city.population > 0);
        setSearchResults(filterResults);
        if (!previousSearches.includes(searchText)) {
          setPreviousSearches([...previousSearches, searchText]);
        }
      })
      .catch(error => {
        console.log('Oops, something went wrong:', error);
      });
  }

  function handlePreviousSearch(search) {
    setSearchText(search);
    handleSearchButton(new Event('submit'));
  }

  return (
    <div className="search-container">
  <form onSubmit={handleSearchButton}>
    <input
      className="search-input"
      type="text"
      value={searchText}
      onChange={(event) => setSearchText(event.target.value)}
      placeholder="Type a city name"
    />
    <button className="search-button" type="submit">
      Look Up City
    </button>
  </form>

  <div className="previous-searches">
    <h2>Previous Searches:</h2>
    <ul>
      {previousSearches.map((search, index) => (
        <li key={index}>
          <button
            className="previous-search-button"
            onClick={() => handlePreviousSearch(search)}
          >
            {search}
          </button>
        </li>
      ))}
    </ul>
  </div>

  <div className="search-results">
    {searchResults && (
      <ul>
        {searchResults.map((city, index) => (
          <li key={index}>
            City: {city.city}, Country: {city.countryCode}, Region: {city.region}, Population: {city.population},{' '}
            Wiki Link:{' '}
            <a href={`https://en.wikipedia.org/wiki/${city.city},_${city.region}`} target="_blank" rel="noopener noreferrer">
              Wikipedia
            </a>
          </li>
        ))}
      </ul>
    )}
  </div>
</div>
  )
}

export default SearchLocation;