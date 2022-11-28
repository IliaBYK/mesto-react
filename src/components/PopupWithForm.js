import { memo} from 'react';

function PopupWithForm({ 
  name, 
  title, 
  children, 
  textButton = 'Сохранить', 
  isOpen, 
  onClose, 
  onSubmit ,
  isValid = true,
  isLoading
}) {

  const closePopup = (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
      onClose();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit();
  }

  return (
    <div className={`popup popup-${name}` + (isOpen ? " popup_opened" : "")} onClick={closePopup}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form name={name} onSubmit={handleSubmit} className="popup__form">
          {children}
          <button className={
            "popup__submit-button button" + (isValid ? "" : " button_disabled")
          }
            disabled={!isValid || isLoading}
            id="popupEdit__submit-button" 
            type="submit" 
            aria-label="Кнопка подтверждения">{isLoading ? "Сохранение..." : textButton}</button>
        </form>
        <button className="popup__close-button button" 
          type="reset" 
          aria-label="Кнопка закрытия всплывающего окна"></button>
      </div>
    </div>
  )
}

export default memo(PopupWithForm);
