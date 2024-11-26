// Mock function to get current user ID will need to be cut and pasted to SearchLocation.jsx to use. 
function getCurrentUserId() {
    return 'mockUserId';
  }
  function handleSearchButton(event) {
    event.preventDefault();
    const searchTextValue = event.target.elements.searchInput.value;
    setSearchText(searchTextValue);
    // Ensure that the user is logged in and you have their ID
    const userId = getCurrentUserId(); 
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
        if (userId) {
          fetch('/api/save-search', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userId: userId,
              searchText: searchTextValue
            }),
          })
          .then(() => {
            if (!previousSearches.includes(searchTextValue)) {
              setPreviousSearches([...previousSearches, searchTextValue]);
            }
          })
          .catch(error => console.error('Error saving search:', error));
        }
      })
      .catch(error => {
        console.log('Oops, something went wrong:', error);
      });
  }