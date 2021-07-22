import React from 'react';
import './Home.css';
import Footer from '../commons/Footer';

const Home = () => {
  return (
    <div className="homeContainer">
      <p className="homeTitle">LE PLEIN DE CINÉ !</p>

      <p className="homeDescription">
        Du 17 au 23 novembre, venez découvrir ou redécouvrir vos films préférés
        dans nos cinémas! Tous les genres seront représentés et toutes les
        séances seront au prix de 6 euros! Venez rêver et vous émerveiller dans
        les salles obscures!
      </p>
      <Footer />
    </div>
  );
};

export default Home;
