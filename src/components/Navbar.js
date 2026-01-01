import React from 'react';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import './Navbar.css';

const Navbar = () => {
  const { cart } = useBooking();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🏠 Property Rentals
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;