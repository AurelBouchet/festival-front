import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import './Admin.css';

const Admin = () => {
  const [selectGenre, setSelectGenre] = useState([]);
  const [selectTheater, setSelectTheater] = useState([]);
  const [movie, setMovie] = useState({
    name: '',
    director: '',
    genre_id: '',
    theater_id: '',
    schedule: '',
  });
  const [pic, setPic] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', movie.title);
    formData.append('director', movie.director);
    formData.append('genre_id', movie.genre_id);
    formData.append('schedule', movie.schedule);
    formData.append('theater_id', movie.theater_id);
    formData.append('picture', pic);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/movies`, formData, config)
      .then((response) => {
        JSON.stringify(
          response,
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Votre film a bien été ajouté!',
            showConfirmButton: false,
            timer: 3000,
          })
        );
      })
      .catch(
        (error) => JSON.stringify(error),
        Swal.fire({
          position: 'top-end',
          icon: 'question',
          title: 'Vérifier les informations',
          showConfirmButton: false,
          timer: 3000,
        })
      );
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/genres`)
      .then((response) => {
        setSelectGenre(response.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/theaters`)
      .then((response) => {
        setSelectTheater(response.data);
      });
  }, []);
  return (
    <div>
      <h1 className="addTitle"> Ajouter un film</h1>
      <form
        method="post"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="formContain"
      >
        <p className="addPic">ajouter une affiche :</p>
        <input
          className="inputMovie'"
          type="file"
          label="affiche"
          name="picture"
          onChange={(e) => setPic(e.target.files[0])}
        />
        <input
          className="inputMovie"
          label="Titre du film"
          placeholder="Film"
          type="text"
          name="title"
          onChange={(e) => setMovie({ ...movie, title: e.target.value })}
        />

        <input
          className="inputMovie"
          label="Réalisateur"
          placeholder="Réalisateur"
          type="text"
          name="director"
          onChange={(e) => setMovie({ ...movie, director: e.target.value })}
        />

        <label htmlFor="genre">
          <span className="select"> </span>
          <select
            className="selectField"
            name="genre_id"
            required
            onChange={(event) => {
              setMovie({
                ...movie,
                genre_id: event.target.value,
              });
            }}
          >
            <option value="">genre</option>
            {selectGenre.map((genre) => {
              return (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              );
            })}
          </select>
        </label>
        <input
          className="inputMovie"
          label="Horaire"
          type="datetime-local"
          name="schedule"
          onChange={(e) => setMovie({ ...movie, schedule: e.target.value })}
        />
        <label htmlFor="theater">
          <span className="select"> </span>
          <select
            className="selectField"
            name="theater_id"
            required
            onChange={(event) => {
              setMovie({
                ...movie,
                theater_id: event.target.value,
              });
            }}
          >
            <option value="">cinéma</option>
            {selectTheater.map((theater) => {
              return (
                <option key={theater.id} value={theater.id}>
                  {theater.place}
                </option>
              );
            })}
          </select>
        </label>
        <input className="buttonSubmit" type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default Admin;
