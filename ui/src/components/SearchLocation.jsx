import React, { useEffect } from 'react';

function SearchLocation() {
  const [searchText, setSearchText] = React.useState('');
  const [searchResults, setSearchResults] = React.useState(null);
  const [previousSearches, setPreviousSearches] = React.useState([]);
  const [nearbyCities, setNearbyCities] = React.useState([]);

  // useEffect(() => {
  //   fetch('https://api.ipify.org?format=json')
  //     .then(response => response.json())
  //     .then(data => {
  //       const ip = data.ip;
  //       return fetch(`https://ipapi.co/${ip}/json/`);  
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //       const { latitude, longitude } = data;
  //       fetchNearbyCities(latitude, longitude);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching user location:', error);
  //     });
  // }, []);

  // const fetchNearbyCities = (latitude, longitude) => {
  //   const nearbyCitiesUrl = `https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${latitude}+${longitude}/nearbyCities?radius=100`;

  //   fetch(nearbyCitiesUrl, {
  //     method: 'GET',
  //     headers: {
  //       'x-rapidapi-key': 'd227ab3bdfmsh384e9f6c4cdd58ap165d02jsn5402cbec7415',
  //       'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
  //     },
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     setNearbyCities(data.data);
  //   })
  //   .catch(error => {
  //     console.error('Oops, something went wrong fetching nearby cities:', error);
  //   });
  // };

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
    .then(response => response.json())
    .then(data => {
      const filterResults = data.data.filter(city => city.population > 0);
      setSearchResults(filterResults);
      if (!previousSearches.includes(searchTextValue)) {
        setPreviousSearches([...previousSearches, searchTextValue]);
      }
    })
    .catch(error => {
      console.log('Oops, something went wrong:', error);
    });
  }

  let previousSearchList = null;
  if (previousSearches.length > 0) {
    previousSearchList = (
      <div>
        <h2>Previous Searches:</h2>
        <ul>
          {previousSearches.map((search, index) => (
            <li key={index}>
              <button onClick={() => handlePreviousSearch(search)}>
                {search}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  let nearbyCitiesList = null;
  if (nearbyCities.length > 0) {
    nearbyCitiesList = (
      <div>
        <h2>Nearby Cities:</h2>
        <ul>
          {nearbyCities.map((city, index) => (
            <li key={index}>
              City: {city.city}, Country: {city.countryCode}, Region: {city.region}, Population: {city.population}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h1>Find a City</h1>
      <form onSubmit={handleSearchButton}>
        <input
          type="text"
          name="searchInput"
          placeholder="Type a city name"
        />
        <button type="submit">Look Up City</button>
      </form>
      
      <div>
        {previousSearchList}
        {nearbyCitiesList}
      </div>

      <div>
        {searchResults ? (
          <ul>
            {searchResults.map((city, index) => {
              const wikiUrl = `https://en.wikipedia.org/wiki/${city.city},_${city.region}`;
              return (
                <li key={index}>
                  City: {city.city}, Country: {city.countryCode}, Region: {city.region}, Population:{' '}
                  {city.population}, Wiki Link:
                  <a href={wikiUrl} target="_blank" rel="noopener noreferrer">
                    Wikipedia
                  </a>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Type a city name and click search</p>
        )}
      </div>
    </div>
  );
}

export default SearchLocation;