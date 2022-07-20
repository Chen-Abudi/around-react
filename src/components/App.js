import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImageExhibitOpen, setIsImageExhibitOpen] = useState(false);
  const [isRemoveCardOpen, setIsRemoveCardOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    name: "",
    link: "",
  });

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleCardClick = (props) => {
    setIsImageExhibitOpen(true);
    setSelectedCard({
      name: props.name,
      link: props.link,
    });
  };

  const handleRemoveCardClick = (card) => {
    setIsRemoveCardOpen(true);
    return card;
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImageExhibitOpen(false);
    setIsRemoveCardOpen(false);
  };

  return (
    <>
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onRemoveCardClick={handleRemoveCardClick}
      />
      <Footer />

      <PopupWithForm
        title="Edit Profile"
        name="edit-profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText="Save"
      >
        <fieldset className="form__fieldset">
          <input
            className="form__input form__input_type_profile-name"
            type="text"
            name="username"
            id="input-name"
            placeholder="Name"
            minLength="2"
            maxLength="40"
            required
          />

          <span className="form__input-error input-name-error"></span>

          <input
            className="form__input form__input_type_profile-title"
            type="text"
            name="userjob"
            placeholder="About Me"
            id="input-about"
            minLength="2"
            maxLength="200"
            required
          />

          <span className="form__input-error input-about-error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        title="New Place"
        name="add-place"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText="Create"
      >
        <fieldset className="form__fieldset">
          <input
            className="form__input form__input_type_postcard-name"
            type="text"
            name="name"
            id="input-title"
            placeholder="Title"
            minLength="1"
            maxLength="30"
            required
          />

          <span className="form__input-error input-title-error"></span>

          <input
            className="form__input form__input_type_postcard-url"
            type="url"
            name="link"
            id="input-url"
            placeholder="Image Link"
            required
          />

          <span className="form__input-error input-url-error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        title="Update Profile Picture"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText="Save"
      >
        <fieldset className="form__fieldset">
          <input
            className="form__input form__input_type_avatar-url"
            type="url"
            name="link"
            id="input-avatar"
            placeholder="User Image Url"
            required
          />
          <span className="form__input-error input-avatar-error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        title="Are You Sure?"
        name="remove-card"
        buttonText="Yes"
        isOpen={isRemoveCardOpen}
        onClose={closeAllPopups}
      />

      <ImagePopup
        card={selectedCard}
        isOpen={isImageExhibitOpen}
        onClose={closeAllPopups}
      />
    </>
  );
}

export default App;
