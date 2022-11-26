import React from 'react';
import PopupWithForm from './PopupWithForm';

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar }) => {

  const avatarRef = React.useRef();

  const [avatar, setAvatar] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatar,
    });
  }

  function handleChangeAvatar(e) {
    setAvatar(e.target.value);
  }

  return (
    <PopupWithForm 
      name="avatar" 
      title="Обновить аватар" 
      onClose={onClose} 
      isOpen={isOpen} 
      onSubmit={handleSubmit}>
      <fieldset className="popup__set">
        <label className="popup__field popup__field_place_popup-update">
          <input 
            ref={avatarRef} 
            value={avatar} 
            onChange={handleChangeAvatar} 
            type="url" 
            className="popup__input" 
            id="popup-link"
            name="avatar" 
            placeholder="Ссылка на аватар" 
            required />
          <span className="popup-link-error popup__input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  )
}

export default React.memo(EditAvatarPopup);