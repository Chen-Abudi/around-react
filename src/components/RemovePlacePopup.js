import React from "react";
import PopupWithForm from "./PopupWithForm";

function RemovePlacePopup({
  card,
  isOpen,
  onClose,
  onCardDelete,
  isRenderLoading,
}) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onCardDelete(card);
  }

  return (
    <PopupWithForm
      title="Are You Sure?"
      name="remove-card"
      buttonText={isRenderLoading ? "Removing..." : "Yes"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
}

export default RemovePlacePopup;
