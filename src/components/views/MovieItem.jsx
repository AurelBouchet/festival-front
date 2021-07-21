/* eslint-disable react/prop-types */
import React from 'react';
import './MovieItem.css';

const MovieItem = (props) => {
  const { title, director, genre, theater, schedule } = props;
  return (
    <div className="box-item">
      <h1 className="title">{title}</h1>
      <p className="director">de {director}</p>
      <p className="genre"> {genre}</p>
      <p className="theater">Diffusé au : {theater}</p>
      <p className="schdule">Date et heure : {schedule}€</p>
    </div>
  );
};

export default MovieItem;
