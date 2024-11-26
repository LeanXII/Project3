import { WBK } from "wikibase-sdk";
import { useState, useEffect } from "react";
//import { attractions } from "../../fakeUIData.js";
import "../stylesheets/TouristAttractions.css";

const wbk = WBK({
  instance: "https://www.wikidata.org",
  sparqlEndpoint: "https://query.wikidata.org/sparql",
});

const TouristAttractions = ({ wikiDataCityId }) => {
  const [attractions, setAttractions] = useState({});

  useEffect(() => {
    const sparql = `SELECT DISTINCT ?attraction ?attractionLabel ?gps
    WHERE {
      ?attraction (wdt:P31/wdt:P279*) wd:Q570116; wdt:P625
      ?gps; rdfs:label
      ?attractionLabel. ?attraction wdt:P131 wd:${wikiDataCityId}
      FILTER(LANG(?attractionLabel) = 'en')}`;
    console.log(wikiDataCityId)
    const url = wbk.sparqlQuery(sparql);
    const headers = { "Api-User-Agent": "jctuttle42@gmail.com" };

    const requestWikiData = async () => {
      let response = await fetch(url, {
        headers: headers,
      });
      response = await response.json();

      console.log("This is the wikidata response:", response);
      setAttractions(response);
    };
    requestWikiData();
  }, []);

  return (
    attractions?.results?.bindings && (
      <div className="attraction-container">
        <h3>Attractions:</h3>
        <div className="attraction-list">
          {attractions.results.bindings.map((attraction) => {
            return (
              <a key={attraction.attractionLabel.value} href={attraction.attraction.value}>
                {attraction.attractionLabel.value}
              </a>
            );
          })}
        </div>
      </div>
    )
  );
};

export default TouristAttractions;
