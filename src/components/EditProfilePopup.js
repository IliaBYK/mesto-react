import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from './context/CurrentUserContext'

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser }) => {

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return(
    <PopupWithForm 
      name="edit" 
      title="Редактировать профиль" 
      onClose={onClose} 
      isOpen={isOpen}
      onSubmit={handleSubmit}>
      <fieldset className="popup__set">
        <label className="popup__field">
          <input 
            value={name} 
            onChange={handleChangeName} 
            type="text" 
            className="popup__input" 
            id="popup-name" 
            name="name" 
            placeholder="Имя" 
            required 
            minLength={2} 
            maxLength={40} />
          <span className="popup-name-error popup__input-error"></span>
        </label>

        <label className="popup__field">
          <input 
            value={description} 
            onChange={handleChangeDescription} 
            type="text" 
            className="popup__input" 
            id="popup-about" 
            name="about" 
            placeholder="О себе" 
            required
             minLength={2} 
             maxLength={200} />
          <span className="popup-about-error popup__input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  )
}

export default React.memo(EditProfilePopup);