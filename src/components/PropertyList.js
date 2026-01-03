import React from 'react';
import PropertyCard from './PropertyCard';

const PropertyList = ({ properties, onAddFavourite }) => {
  return (
    <div className="property-list">
      {properties.map(property => (
        <PropertyCard
          key={property.id}
          property={property}
          onAddFavourite={onAddFavourite}
        />
      ))}
    </div>
  );
};

export default PropertyList;
