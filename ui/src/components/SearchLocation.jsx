
import React, { useState } from 'react';

function SearchLocation() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${query}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'd227ab3bdfmsh384e9f6c4cdd58ap165d02jsn5402cbec7415', // Replace with your API key
          'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
        }
      });


      const data = await response.json();
      setResults(data.data);  // Assuming data.data contains the search results
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Search Locations</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter location"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {results ? (
          <ul>
            {results.map((result, index) => (
              <li key={index}>
                {result.city}, {result.countryCode}
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default SearchLocation;