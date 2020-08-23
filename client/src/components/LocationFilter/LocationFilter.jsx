import React from 'react';

const LocationFilter = ({ filters, setFilters, locations }) => {

  console.log(locations.length);

  const liClick = e =>
    setFilters({ ...filters, currentLocation: e.target.innerText });

  const availableLocations = locations.map(location =>
    <li key={location} onClick={liClick}>{ location }</li>
  )
  return (
    <div>
      <h3>Location</h3>
      <div>{ filters.currentLocation }</div>
      <ul>
        {availableLocations}
      </ul>
    </div>
  )
};

export default LocationFilter;
