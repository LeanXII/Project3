import { useEffect, useState } from "react";
import TouristAttractions from "./TouristAttractions";
import {nearbySuggestions} from '../../fakeUIData.js'
import '../stylesheets/SuggestedLocations.css'

const apiKey = import.meta.env.VITE_API_KEY;

function SuggestedLocations() {
  // const [clientLocationObj, setClientLocationObj] = useState({});
  // const [nearbySuggestions, setNearbySuggestions] = useState({});

  //Request to backend -> backend to ipGrabber and back -> request to geoDbapi
  //Likely a better way to deal with slow server spin up than a setTimeout

  // useEffect(() => {
  //   const ipFetch = async () => {
  //     try {
  //       let response = await fetch("http://localhost:3000/home");
  //       if (response.ok) {
  //         response = await response.json();
  //         setClientLocationObj(response);
  //         fetch(
  //           `https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${response?.lat}${response?.lon}/nearbyPlaces?limit=3&offset=0&types=CITY&radius=100&sort=-population,name`,
  //           {
  //             headers: {
  //               "x-rapidapi-key": apiKey,
  //               "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
  //             },
  //           }
  //         )
  //           .then((res) => res.json())
  //           .then((data) => {
  //             console.log(data);
  //             setNearbySuggestions(data);
  //           });
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   setTimeout(ipFetch, 3000);
  // }, []);

  return (
    nearbySuggestions?.data && (
      <div className="suggestion-container">
        {nearbySuggestions.data.map((city) => {
          return (
            <div key = {city.id} className = "suggestion-card">
              <h1>{city.name}</h1>
              <TouristAttractions wikiDataCityId={city.wikiDataId} />
            </div>
          );
        })}
      </div>
    )
  );
}

export default SuggestedLocations;
