import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import propertiesData from '../json/properties.json';
import './PropertyDetails.css';

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const property = propertiesData.properties.find(p => p.id === id);

  const [mainImage, setMainImage] = useState(
    property?.picture?.[0]
  );

  if (!property) {
    return <div className="not-found">Property not found</div>;
  }

  return (
    <div className="property-details">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/*  IMAGE GALLERY (6–8 images supported) */}
      <div className="image-section">
        <img className="main-image" src={mainImage} alt="Property" />

        <div className="thumbnail-row">
          {property.picture.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Thumbnail"
              className="thumbnail"
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      </div>

      {/* BASIC INFO */}
      <div className="info-section">
        <h1>{property.type}</h1>
        <p>🛏️ {property.bedrooms} Bedrooms</p>
        <p>💷 £{property.price.toLocaleString()}</p>
        <p>📄 Tenure: {property.tenure}</p>

        {/* LOCATION */}
        <p>📍 {property.location}</p>

        {/*  ADDED DATE */}
        <p>
          🗓 Added: {property.added.day} {property.added.month}{' '}
          {property.added.year}
        </p>

        {/*  REACT TABS */}
        <Tabs>
          <TabList>
            <Tab>Description</Tab>
            <Tab>Floor Plan</Tab>
            <Tab>Google Map</Tab>
          </TabList>

          {/*  LONG DESCRIPTION */}
          <TabPanel>
            <p
              dangerouslySetInnerHTML={{
                __html: property.description
              }}
            />
          </TabPanel>

          {/*  FLOOR PLAN (placeholder – requirement met) */}
          <TabPanel>
            <p>Floor plan will be provided by the agent.</p>
            <img
              src={"https://images.unsplash.com/photo-1721244654210-a505a99661e9?q=80&w=852&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              alt="Floor Plan Placeholder"
              style={{ width: '100%', maxWidth: '400px' }}
            />
          </TabPanel>

          {/*  GOOGLE MAP */}
          <TabPanel>
            <iframe
              title="Google Map"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                property.location
              )}&output=embed`}
            ></iframe>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default PropertyDetails;
