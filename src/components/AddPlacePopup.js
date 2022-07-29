import React, { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isRenderLoading }) {
  const [cardsName, setCardsName] = useState("");
  const [cardsImageLink, setCardsImageLink] = useState("");
  const [isCardsNameValids, setIsCardsNameValids] = useState(true);
  const [isCardsImageLinkValids, setIsCardsImageLinkValids] = useState(true);
  const [cardsNameErrorMessage, setCardsNameErrorMessage] = useState("");
  const [cardsImageLinkErrorMessage, setCardsImageLinkErrorMessage] =
    useState("");

  useEffect(() => {
    setCardsName("");
    setCardsImageLink("");
    setIsCardsNameValids(true);
    setIsCardsImageLinkValids(true);
    setCardsNameErrorMessage("");
    setCardsImageLinkErrorMessage("");
  }, [isOpen]);

  function handleInputsModify(evt) {
    const { name, value, validity, validationMessage } = evt.target;
    switch (name) {
      case "name": {
        setCardsName(value);
        setIsCardsNameValids(validity.valid);
        !validity.valid && setCardsNameErrorMessage(validationMessage);
        break;
      }
      case "link": {
        setCardsImageLink(value);
        setIsCardsImageLinkValids(validity.valid);
        !validity.valid && setCardsImageLinkErrorMessage(validationMessage);
        break;
      }
      default:
        break;
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({ name: cardsName, link: cardsImageLink });
  }

  return (
    <PopupWithForm
      title="New Place"
      name="add-place"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={isRenderLoading ? "Creating..." : "Create"}
    >
      <fieldset className="form__fieldset">
        <input
          className={`form__input ${
            !isCardsNameValids && `form__input_type_error`
          }`}
          type="text"
          name="name"
          id="input-title"
          placeholder="Title"
          minLength="1"
          maxLength="30"
          onChange={handleInputsModify}
          value={cardsName}
          required
        />

        <span
          className={`form__input-error ${
            !isCardsNameValids && `form__input-error_visible`
          }`}
          id="input-title-error"
        >
          {cardsNameErrorMessage}
        </span>

        <input
          className={`form__input ${
            !isCardsImageLinkValids && `form__input_type_error`
          }`}
          type="url"
          name="link"
          id="input-url"
          placeholder="Image Link"
          onChange={handleInputsModify}
          value={cardsImageLink}
          required
        />

        <span
          className={`form__input-error ${
            !isCardsImageLinkValids && `form__input-error_visible`
          }`}
          id="input-url-error"
        >
          {cardsImageLinkErrorMessage}
        </span>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
