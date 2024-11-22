
import React from 'react';

function SearchLocation() {
  const [searchText, setSearchText] = React.useState('');
  const [searchResults, setSearchResults] = React.useState(null);

  function handleSearchButton(event) {
    event.preventDefault();

  const searchUrl = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${searchText}`;


    fetch(searchUrl, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'd227ab3bdfmsh384e9f6c4cdd58ap165d02jsn5402cbec7415',
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
      }
    })
      .then(response => response.json()) 
      .then(data => {
        setSearchResults(data.data);
      })
      .catch(error => {
        console.log('Oops, something went wrong:', error);
      });
  }

 
  return (
    <div>
      <h1>Find a City</h1>
      <form onSubmit={handleSearchButton}>
        <input
          type="text"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Type a city name"
        />
        <button type="submit">
          Look Up City
        </button>
      </form>
      <div>
        {searchResults ? (
          <ul>
            {searchResults.map((city, index) => (
              <li key={index}>
                City: {city.city}, Country: {city.countryCode}
              </li>
            ))}
          </ul>
        ) : (
          <p>Type a city name and click search</p>
        )}
      </div>
    </div>
  );
}
export default SearchLocation;
