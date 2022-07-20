import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleRemoveClick() {
    props.onRemoveCardClick(props.card);
  }

  return (
    <li className="postcard">
      <button
        className="postcard__remove-button"
        aria-label="remove postcard"
        type="button"
        onClick={handleRemoveClick}
      ></button>
      <img
        className="postcard__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="postcard__title-area">
        <h2 className="postcard__title">{props.card.name}</h2>
        <div className="postcard__like-container">
          <button
            className="postcard__like-button"
            aria-label="like-or-unlike-postcard"
            type="button"
          ></button>
          <span className="postcard__like-counter">
            {props.card.likes.length}
          </span>
        </div>
      </div>
    </li>
  );
}

export default Card;
