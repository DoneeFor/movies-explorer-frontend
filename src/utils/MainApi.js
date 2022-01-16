import { BEATFILM_URL, BASE_URL } from '../utils/constants';

class Api {
  constructor({ url }) {
    this.url = url;
  }

  getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  signUp({ email, name, password }) {
    return fetch(`${this.url}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name, password }),
    })
      .then(res => this.getResponseData(res));
  }

  signIn({ email, password }) {
    return fetch(`${this.url}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then(res => this.getResponseData(res));
  }

  getUser(jwt) {
    return fetch(`${this.url}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${jwt}`,
      },
    })
      .then(res => this.getResponseData(res));
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
    .then(res => this.getResponseData(res));
  }

  getSavedMovies(jwt) {
    return fetch(`${this.url}/movies`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${jwt}`,
      },
    })
      .then(res => this.getResponseData(res));
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
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${BEATFILM_URL}${movie.image.url}`,
        trailer: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: `${BEATFILM_URL}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
      }),
    })
    .then(res => this.getResponseData(res));
  }

  deleteMovie({ movie, jwt }) {
    return fetch(`${this.url}/movies/${movie._id}`, {
      method: 'DELETE',
      headers: {
        "Authorization" : `Bearer ${jwt}`,
      },
    })
    .then(res => this.getResponseData(res));
  }
}

const api = new Api({
  url: `${BASE_URL}`
});

export default api;
