import React from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({ isOpen, onClose, onAddPlace }) => {

  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleAddName(e) {
    setName(e.target.value);
  }

  function handleAddLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: name,
      link: link
    });
  }

  return (
    <PopupWithForm 
      name="add-card" 
      title="Новое место" 
      onClose={onClose} 
      isOpen={isOpen} 
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__set">
        <label className="popup__field">
          <input 
            value={name} 
            onChange={handleAddName} 
            type="text" 
            className="popup__input" 
            id="popup-place-name" 
            name="name" 
            placeholder="Название" 
            required 
            minLength={2}
            maxLength={30} 
          />
          <span className="popup-place-name-error popup__input-error"></span>
        </label>

        <label className="popup__field">
          <input 
            value={link} 
            onChange={handleAddLink} 
            type="url" 
            className="popup__input" 
            id="popup-src" 
            name="link" 
            placeholder="Ссылка на картинку" 
            required 
          />
          <span className="popup-src-error popup__input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  )
}

export default React.memo(AddPlacePopup);