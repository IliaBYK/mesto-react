import PopupWithForm from './PopupWithForm';

const PopupAvatar = ({isOpen, onClose}) => {
  return (
    <PopupWithForm name="avatar" title="Обновить аватар" onClose={onClose} isOpen={isOpen}>
      <fieldset className="popup__set">
        <label className="popup__field popup__field_place_popup-update">
          <input type="url" className="popup__input" id="popup-link" name="avatar" placeholder="Ссылка на аватар" required />
          <span className="popup-link-error popup__input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  )
}

export default PopupAvatar;