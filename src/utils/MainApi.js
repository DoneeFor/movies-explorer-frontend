import { BEATFILM_URL, BASE_URL } from '../utils/constants';

class MainApi {
  constructor({ url }) {
    this.url = url;
  }

  _processingResponse(res) {
    if (res.ok) {
      return res.json();
    }

    const err = new Error(`Ошибка, код ${res.status}`);
    err.statusCode = res.status;

    return Promise.reject(err)
  }

  signUp({ email, password, name }) {
    return fetch(`${this.url}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    })
      .then(res => this._processingResponse(res));
  }

  signIn({ email, password }) {
    return fetch(`${this.url}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then(res => this._processingResponse(res));
  }

  getUser(jwt) {
    return fetch(`${this.url}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${jwt}`,
      },
    })
      .then(res => this._processingResponse(res));
  }

  updateUser({ userData, jwt}) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        "Authorization" : `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        name: userData.name,
        email: userData.email
      }),
    })
    .then(res => this._processingResponse(res));
  }

  getSavedMovies(jwt) {
    return fetch(`${this.url}/movies`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${jwt}`,
      },
    })
      .then(res => this._processingResponse(res));
  }

  saveMovie({ movie, jwt }) {
    return fetch(`${this.url}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization" : `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        country: movie.country,
        description: movie.description,
        director: movie.director,
        duration: movie.duration,
        image: `${BEATFILM_URL}${movie.image.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: `${BEATFILM_URL}${movie.image.formats.thumbnail.url}`,
        trailer: movie.trailerLink,
        year: movie.year,
      }),
    })
    .then(res => this._processingResponse(res));
  }

  deleteMovie({ movie, jwt }) {
    return fetch(`${this.url}/movies/${movie._id}`, {
      method: 'DELETE',
      headers: {
        "Authorization" : `Bearer ${jwt}`,
      },
    })
    .then(res => this._processingResponse(res));
  }
}

const mainApi = new MainApi({
  url: `${BASE_URL}`
});

export default mainApi;
