import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';




const LocationList = () => {
  const fetchResult = useFetch('https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions/locations');
  const data = fetchResult.data
  const loading= fetchResult.loading

  if (loading) {
    return (
      <div>Loading.....</div>
    );
  }
 

  return (
    <div className="page">
      <h1>Super Awesome Travel App</h1>
      {data.results.map((location) => (  
        <ListItem key={location.id}>
          <Link to={`/location/${location .id}`}>
            <h3>{location.name}</h3>
          </Link>
        </ListItem>
      ))}
    </div>
  );
};

export default CharacterList;