import React, { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isRenderLoading }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isNameValids, setIsNameValids] = useState(true);
  const [isDescriptionValids, setIsDescriptionValids] = useState(true);
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState("");

  useEffect(() => {
    setName(currentUser.name || "");
    setDescription(currentUser.about || "");
    setIsNameValids(true);
    setIsDescriptionValids(true);
    setNameErrorMessage("");
    setDescriptionErrorMessage("");
  }, [currentUser, isOpen]);

  function handleInputsModify(evt) {
    const { name, value, validity, validationMessage } = evt.target;
    switch (name) {
      case "username": {
        setName(value);
        setIsNameValids(validity.valid);
        !validity.valid && setNameErrorMessage(validationMessage);
        break;
      }
      case "userjob": {
        setDescription(value);
        setIsDescriptionValids(validity.valid);
        !validity.valid && setDescriptionErrorMessage(validationMessage);
        break;
      }
      default:
        break;
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Edit Profile"
      name="edit-profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={isRenderLoading ? "Saving..." : "Save"}
    >
      <fieldset className="form__fieldset">
        <input
          className={`form__input ${!isNameValids && `form__input_type_error`}`}
          value={name}
          onChange={handleInputsModify}
          type="text"
          name="username"
          id="input-name"
          placeholder="Name"
          minLength="2"
          maxLength="40"
          required
        />

        <span
          className={`form__input-error ${
            !isNameValids && `form__input-error_visible`
          }`}
          id="input-name-error"
        >
          {nameErrorMessage}
        </span>

        <input
          className={`form__input ${
            !isDescriptionValids && `form__input_type_error`
          }`}
          value={description}
          onChange={handleInputsModify}
          type="text"
          name="userjob"
          placeholder="About Me"
          id="input-about"
          minLength="2"
          maxLength="200"
          required
        />

        <span
          className={`form__input-error ${
            !isDescriptionValids && `form__input-error_visible`
          }`}
          id="input-about-error"
        >
          {descriptionErrorMessage}
        </span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
