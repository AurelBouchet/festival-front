import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieItem from './MovieItem';
import './Movie.css';
import Footer from '../commons/Footer';

const Movie = () => {
  const [theater, setTheater] = useState('');

  // const [value, setValue] = useState('');
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
    <>
      <div className="results">
        <p className="searchTheater">Rechercher un film par cinéma :</p>
        <input
          className="selectPlace"
          type="text"
          placeholder="Rex, Concorde ou Minuit"
          value={theater}
          onChange={(e) => setTheater(e.target.value)}
        />
      </div>
      <h2 className="moviesTitle">Les films:</h2>
      <div className="movieResults">
        {movies
          .filter((movie) =>
            movie.place.toLowerCase().includes(theater.toLowerCase())
          )

          .map((movie) => (
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
    </>
  );
};
export default Movie;
