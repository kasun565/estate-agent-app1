import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import PropertyList from '../components/PropertyList';
import FavouritesList from '../components/FavouritesList';
import propertiesData from '../json/properties.json';
import './Home.css';

const Home = () => {
  const [properties] = useState(propertiesData.properties || []);
  const [filteredProperties, setFilteredProperties] = useState(propertiesData.properties || []);
  const [favourites, setFavourites] = useState([]);

  const handleSearch = (filters) => {
    let filtered = properties;

    if (filters.location) {
      filtered = filtered.filter(p =>
        p.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.type) {
      filtered = filtered.filter(p => p.type.toLowerCase() === filters.type.toLowerCase());
    }

    if (filters.minBedrooms) {
      filtered = filtered.filter(p => p.bedrooms >= filters.minBedrooms);
    }

    if (filters.maxBedrooms) {
      filtered = filtered.filter(p => p.bedrooms <= filters.maxBedrooms);
    }

    setFilteredProperties(filtered);
  };

  //  ADD TO FAVOURITES (NO DUPLICATES)
  const addToFavourites = (property) => {
    if (!favourites.find(f => f.id === property.id)) {
      setFavourites([...favourites, property]);
    }

  };


  // Add these functions inside Home component

  // Remove single favourite
  const removeFavourite = (id) => {
    setFavourites(favourites.filter(f => f.id !== id));
  };

  // Clear all favourites
  const clearFavourites = () => {
    setFavourites([]);
  };


  return (
    <div className="home-layout">
      <div className="main-content">
        <div className="hero-section">
          <h1>Find Your Perfect Property</h1>
          <p>Discover amazing places to stay</p>
        </div>

        <SearchBar onSearch={handleSearch} />

        <PropertyList
          properties={filteredProperties}
          onAddFavourite={addToFavourites}
        />
      </div>

      {/*  FAVOURITES SIDE PANEL */}
      <FavouritesList
        favourites={favourites}
        onDropFavourite={addToFavourites}
        onRemoveFavourite={removeFavourite}
        onClearFavourites={clearFavourites}
      />

    </div>
  );
};

export default Home;
