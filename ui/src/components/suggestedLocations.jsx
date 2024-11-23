import { useEffect, useState } from "react";
// import SearchLocation from "./components/SearchLocation.jsx";

const apiKey = import.meta.env.VITE_API_KEY;

function SuggestedLocations() {
  const [clientLocationObj, setClientLocationObj] = useState({});
  const [nearbySuggestions, setNearbySuggestions] = useState({});

  useEffect(() => {
    const ipFetch = async () => {
      try {
        let response = await fetch("http://localhost:3000/home");
        if (response.ok) {
          response = await response.json();
          console.log(response);
          setClientLocationObj(response);
          fetch(
            `https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${response?.lat}${response?.lon}/nearbyPlaces?limit=5&offset=0&types=CITY&radius=100&sort=name`,
            {
              headers: {
                "x-rapidapi-key": apiKey,
                "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
              },
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data)
              setNearbySuggestions(data)
            });
        }
      } catch (err) {
        console.log(err);
      }
    };

    setTimeout(ipFetch, 5000);
  }, []);

  return (
    nearbySuggestions?.data && (
      <div className="App">
        <h1>{nearbySuggestions.data[0]?.name}</h1>
      </div>
    )
  );
}

export default SuggestedLocations;
