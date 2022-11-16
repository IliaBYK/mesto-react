import React from 'react';

function PopupWithForm({ name, title, children, textButton ='Сохранить', isOpen, onClose }) {

  const closePopup = (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
      onClose();
    }
  }

  return (
    <div className={`popup popup-${name}` + (isOpen ? " popup_opened" : "")} onClick={closePopup}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form name={name} className="popup__form">
          {children}
          <button className="popup__submit-button button" 
            id="popupEdit__submit-button" 
            type="submit" 
            aria-label="Кнопка подтверждения">{textButton}</button>
        </form>
        <button className="popup__close-button button" 
          type="reset" 
          aria-label="Кнопка закрытия всплывающего окна"></button>
      </div>
    </div>
  )
}

export default PopupWithForm;
