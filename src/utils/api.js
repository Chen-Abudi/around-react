import { baseUrl, headers } from "./constants";

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _processResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`An error just occurred: ${res.status}`);
    }
  }

  getInitialcards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then(this._processResponse);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._processResponse);
  }

  setUserInfo({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(this._processResponse);
  }

  setUserAvatar({ avatar }) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      }),
    }).then(this._processResponse);
  }

  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._processResponse);
  }

  removeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._processResponse);
  }

  cardLike(cardId, isLiked) {
    const method = isLiked ? "DELETE" : "PUT";
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: method,
      headers: this._headers,
    }).then(this._processResponse);
  }
}

const api = new Api({ baseUrl, headers });

export default api;
