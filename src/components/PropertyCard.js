import React from 'react';
import { useNavigate } from 'react-router-dom';
import FavouriteButton from './FavouriteButton';
import './PropertyCard.css';

const PropertyCard = ({ property, onAddFavourite }) => {
  const navigate = useNavigate();

  return (
    <div
      className="property-card"
      draggable
      onDragStart={(e) =>
        e.dataTransfer.setData('property', JSON.stringify(property))
      }
    >
      <img src={property.picture[0]} alt={property.type} />

      <div className="property-info" onClick={() => navigate(`/property/${property.id}`)}>
        <h3>{property.type}</h3>
        <p>📍 {property.location}</p>
        <p>🛏 {property.bedrooms} Bedrooms</p>
        <p>£{property.price.toLocaleString()}</p>
      </div>

      <FavouriteButton onClick={() => onAddFavourite(property)} />
    </div>
  );
};

export default PropertyCard;
