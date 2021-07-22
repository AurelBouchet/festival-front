import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <Link to="/admin" className="adminLink">
        admin
      </Link>
    </div>
  );
};

export default Footer;
