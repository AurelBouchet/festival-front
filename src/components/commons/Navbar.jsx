import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navBar">
      <Link to="/" className="homeLink">
        <p>HOME</p>
      </Link>
      <Link to="/movies" className="movieLink">
        <p>FILMS A l&lsquo;AFFICHE</p>
      </Link>
      <Link to="/theaters" className="theaterLink">
        <p>LES CINÉMAS</p>
      </Link>
    </div>
  );
};

export default Navbar;
