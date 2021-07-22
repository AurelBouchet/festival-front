import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieItem from './MovieItem';
import './Movie.css';
import Footer from '../commons/Footer';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/movies`)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="results">
      {movies.map((movie) => (
        <MovieItem
          title={movie.title}
          director={movie.director}
          genre={movie.name}
          theater={movie.place}
          schedule={movie.schedule}
          picture={movie.picture}
          key={movie.id}
        />
      ))}
      <Footer />
    </div>
  );
};
export default Movie;
