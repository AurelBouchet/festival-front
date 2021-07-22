/* eslint-disable react/prop-types */
import React from 'react';
import './MovieItem.css';

const MovieItem = (props) => {
  const { title, director, genre, theater, schedule, picture } = props;
  return (
    <div className="box-item">
      <h1 className="title">{title}</h1>
      <p className="director">de {director}</p>
      <p className="genre"> {genre}</p>
      <p className="theater">Lieu de diffusion : {theater}</p>
      <p className="schedule">Date et heure : {schedule}</p>
      <a
        href={`${process.env.REACT_APP_BACKEND_URL}/${picture}`}
        className="download-file"
        download
      >
        Télécharger !
      </a>
    </div>
  );
};

export default MovieItem;
