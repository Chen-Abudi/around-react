import React, { useState, useEffect } from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api
      .getInitialcards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__image-overlay"
          onClick={props.onEditAvatarClick}
        >
          <img
            className="profile__image"
            src={userAvatar}
            alt="User's Profile Pic"
          />
        </div>
        <div className="profile__info">
          <div className="profile__person">
            <h1 className="profile__name">{userName}</h1>

            <button
              className="profile__edit-button"
              type="button"
              aria-label="open-edit-profile-modal"
              onClick={props.onEditProfileClick}
            ></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="open-new-card-modal"
          onClick={props.onAddPlaceClick}
        ></button>
      </section>

      <section className="postcards">
        <ul className="postcards__list">
          {cards.map((card) => {
            return (
              <Card
                card={card}
                key={card._id}
                onCardClick={props.onCardClick}
                onRemoveCardClick={props.onRemoveCardClick}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
