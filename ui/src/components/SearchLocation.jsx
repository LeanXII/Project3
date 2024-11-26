import React from 'react';
import '../stylesheets/SearchLocations.css';

function SearchLocation() {
  const [searchText, setSearchText] = React.useState('');
  const [searchResults, setSearchResults] = React.useState(null);
  const [previousSearches, setPreviousSearches] = React.useState([]);

  function handleSearchButton(event) {
    event.preventDefault();
    const searchTextValue = event.target.elements.searchInput.value;
    setSearchText(searchTextValue);

    const searchUrl = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${searchTextValue}`;

    fetch(searchUrl, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'd227ab3bdfmsh384e9f6c4cdd58ap165d02jsn5402cbec7415',
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const filterResults = data.data.filter((city) => city.population > 0);
        setSearchResults(filterResults);

        if (!previousSearches.includes(searchTextValue)) {
          const updatedSearches = [];
          for (let i = 0; i < previousSearches.length; i++) {
            updatedSearches.push(previousSearches[i]);
          }
          updatedSearches.push(searchTextValue);
          setPreviousSearches(updatedSearches);
        }
      })
      .catch((error) => {
        console.log('Oops, something went wrong:', error);
      });
  }

  function handlePreviousSearch(search) {
    setSearchText(search);

    const searchUrl = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${search}`;

    fetch(searchUrl, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'd227ab3bdfmsh384e9f6c4cdd58ap165d02jsn5402cbec7415',
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const filterResults = data.data.filter((city) => city.population > 0);
        setSearchResults(filterResults);
      })
      .catch((error) => {
        console.log('Oops, something went wrong:', error);
      });
  }

  let previousSearchList = null;
  if (previousSearches.length > 0) {
    previousSearchList = (
      <div id="previous-searches">
        <h2>Previous Searches:</h2>
        <ul>
          {previousSearches.map((search, index) => (
            <li key={index} className="previous-search-item">
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
    );
  }

  return (
    <div id="search-container">
      <h1 id="search-heading">Find a City</h1>
      <form id="search-form" onSubmit={handleSearchButton}>
        <input
          id="search-input"
          type="text"
          name="searchInput"
          placeholder="Type a city name"
        />
        <button id="search-button" type="submit">
          Look Up City
        </button>
      </form>

      <div>{previousSearchList}</div>

      <div id="search-results">
        {searchResults ? (
          <ul>
            {searchResults.map((city, index) => {
              const wikiUrl = `https://en.wikipedia.org/wiki/${city.city},_${city.region}`;
              return (
                <li key={index} className="search-result-item">
                  City: {city.city}, Country: {city.countryCode}, Region: {city.region}, Population:{' '}
                  {city.population}, Wiki Link:
                  <a
                    href={wikiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wiki-link"
                  >
                    Wikipedia
                  </a>
                </li>
              );
            })}
          </ul>
        ) : (
          <p id="no-results">Type a city name and click search</p>
        )}
      </div>
    </div>
  );
}

export default SearchLocation;