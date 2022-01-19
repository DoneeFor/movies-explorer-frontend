import React from 'react';
import './MoviesCard.css';
import { Route, Switch } from 'react-router-dom';
import { BEATFILM_URL } from '../../utils/constants';
import convertDuration from '../../utils/convertDuration';

function MoviesCard({
  movie,
  savedMoviesByCurrentUser,
  onMovieSave,
  onMovieDelete
}) {
  const isSaved = movie.id && savedMoviesByCurrentUser.some((m) => m.movieId === movie.id);

  const saveButtonClassName = `movies-card__button movies-card__button_type_save ${
    isSaved && "movies-card__button_type_save-active"
  }`;
  const deleteButtonClassName = "movies-card__button movies-card__button_type_delete";

  function handleDeleteClick() {
    onMovieDelete(movie);
  }

  function handleSaveClick() {
    if (isSaved) {
      onMovieDelete(savedMoviesByCurrentUser.filter((m) => m.movieId === movie.id)[0]);
    } else if (!isSaved) {
      onMovieSave(movie);
    }
  }

  return (
    <li className="movie-card">
      <div className="movie-card__caption">  
      <Switch>
            <Route path="/movies">
              <img
                className="movies-card__cover"
                src={`${BEATFILM_URL}${movie.image.url}`}
                alt="Обложка фильма"
              />
            </Route>
            <Route path="/saved-movies">
              <img
                className="movies-card__cover"
                src={movie.image}
                alt="Обложка фильма"
              />
            </Route>
          </Switch> 
        <div className="movie-card__text-block">
          <h2 className="movie-card__title">{movie.nameRU}</h2>
          <span className="movie-card__length">{convertDuration(movie.duration)}</span>
          <Switch>
          <Route path="/movies">
            <button
              className={saveButtonClassName}
              onClick={handleSaveClick}
              type="button"
            ></button>
          </Route>
          <Route path="/saved-movies">
            <button
              className={deleteButtonClassName}
              onClick={handleDeleteClick}
              type="button"
            ></button>
          </Route>
          </Switch>
        </div>
      </div>
    </li>
  );
}

export default MoviesCard;
