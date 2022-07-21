import React from "react";

function Card({
  card,
  link,
  name,
  likesCounter,
  onCardClick,
  onRemoveCardClick,
}) {
  function handleClick() {
    onCardClick(card);
  }

  function handleRemoveClick() {
    onRemoveCardClick(card);
  }

  return (
    <li className="postcard">
      <button
        className="postcard__remove-button"
        aria-label="remove postcard"
        type="button"
        onClick={handleRemoveClick}
      />
      <img
        className="postcard__image"
        src={link}
        alt={name}
        onClick={handleClick}
      />
      <div className="postcard__title-area">
        <h2 className="postcard__title">{name}</h2>
        <div className="postcard__like-container">
          <button
            className="postcard__like-button"
            aria-label="like-or-unlike-postcard"
            type="button"
          />
          <span className="postcard__like-counter">{likesCounter}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
