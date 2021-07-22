import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import FormInput from '../commons/FormInput';
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
    formData.append('name', movie.name);
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
            position: 'center',
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
          position: 'center',
          icon: 'error',
          title: 'Veuillez vérifier les informations saisies',
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
          className="inputPic'"
          type="file"
          label="affiche"
          name="picture"
          onChange={(e) => setPic(e.target.files[0])}
        />
        <FormInput
          classInput
          label="Titre du film"
          type="text"
          name="name"
          value={movie}
          setValue={setMovie}
        />

        <FormInput
          classInput
          label="Réalisateur"
          type="text"
          name="director"
          value={movie}
          setValue={setMovie}
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
        <FormInput
          classInput
          label="Horaire"
          type="datetime-local"
          name="schedule"
          value={movie}
          setValue={setMovie}
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
