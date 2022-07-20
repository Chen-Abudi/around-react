import React from "react";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_receptive" : ""
      }`}
    >
      <div className="popup__overlay">
        <button
          className="popup__close-button"
          type="button"
          aria-label="close-delete-modal"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form
          action="submit"
          className="form popup__form"
          name={props.name}
          noValidate
        >
          {props.children}
          <fieldset className="form__fieldset">
            <button className="form__button" type="submit">
              {props.buttonText}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
