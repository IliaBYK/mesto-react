import PopupWithForm from "./PopupWithForm";

const PopupAdd = ({ isOpen, onClose }) => {
  return (
    <PopupWithForm name="add-card" title="Новое место" onClose={onClose} isOpen={isOpen}>
      <fieldset className="popup__set">
        <label className="popup__field">
          <input type="text" className="popup__input" id="popup-place-name" name="name" placeholder="Название" required minLength={2} maxLength={30} />
          <span className="popup-place-name-error popup__input-error"></span>
        </label>

        <label className="popup__field">
          <input type="url" className="popup__input" id="popup-src" name="link" placeholder="Ссылка на картинку" required />
          <span className="popup-src-error popup__input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  )
}

export default PopupAdd;