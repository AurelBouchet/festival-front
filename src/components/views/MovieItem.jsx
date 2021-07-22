/* eslint-disable react/prop-types */
import React from 'react';
import './MovieItem.css';

const MovieItem = (props) => {
  const { title, director, genre, theater, schedule, picture } = props;
  return (
    <div className="box-item">
      <h1 className="movieTitle">{title}</h1>
      <div className="movieData">
        <p className="director">Réalisé par {director}</p>
        <p className="genre"> {genre}</p>
        <p className="theater">Lieu de diffusion : {theater}</p>
        <p className="schedule">Date et heure : {schedule}</p>
        <img
          src={`${process.env.REACT_APP_BACKEND_URL}/${picture}`}
          alt="pictureMovie"
          className="pictureMovie"
        />
      </div>
    </div>
  );
};

export default MovieItem;
