import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieItem from './MovieItem';
import './Movie.css';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  // const [searchValue, setSearchValue] = React.useState('');
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
          genre={movie.genre}
          theater={movie.theater}
          schedule={movie.schedule}
          key={movie.id}
        />
      ))}
    </div>
  );
};
export default Movie;
