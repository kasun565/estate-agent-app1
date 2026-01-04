import React from 'react';
import './Favourites.css';

const FavouritesList = ({ favourites, onDropFavourite, onRemoveFavourite, onClearFavourites }) => {

  const handleDrop = (e) => {
    e.preventDefault();
    const property = JSON.parse(e.dataTransfer.getData('property'));
    onDropFavourite(property);
  };

  return (
    <div
      className="favourites-panel"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <div className="favourites-header">
        <h3>⭐ Favourites</h3>
        {favourites.length > 0 && (
          <button className="clear-btn" onClick={onClearFavourites}>
            Clear All
          </button>
        )}
      </div>

      {favourites.length === 0 && (
        <p className="hint">Drag a property here or click ❤️</p>
      )}

      {favourites.map(fav => (
        <div key={fav.id} className="favourite-item">
          <img src={fav.picture[0]} alt={fav.type} />
          <div className="fav-info">
            <p>{fav.type}</p>
            <small>{fav.location}</small>
          </div>
          <button
            className="remove-btn"
            onClick={() => onRemoveFavourite(fav.id)}
            title="Remove from favourites"
          >
            ✖️
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavouritesList;
