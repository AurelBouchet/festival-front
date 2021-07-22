import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <p>yo footer</p>
      <Link to="/admin" className="adminLink">
        admin
      </Link>
    </div>
  );
};

export default Footer;
