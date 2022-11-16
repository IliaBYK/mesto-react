import PopupWithForm from "./PopupWithForm";

const PopupEdit = ({isOpen, onClose}) => {
  return(
    <PopupWithForm name="edit" title="Редактировать профиль" onClose={onClose} isOpen={isOpen}>
      <fieldset className="popup__set">
        <label className="popup__field">
          <input type="text" className="popup__input" id="popup-name" name="name" placeholder="Имя" required minLength={2} maxLength={40} />
          <span className="popup-name-error popup__input-error"></span>
        </label>

        <label className="popup__field">
          <input type="text" className="popup__input" id="popup-about" name="about" placeholder="О себе" required minLength={2} maxLength={200} />
          <span className="popup-about-error popup__input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  )
}

export default PopupEdit;