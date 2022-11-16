export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//объект настроек
export const configObj = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  fieldSelector: '.popup__set',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
  inputErrorSizeSmall: 'popup__input-error_font-size_small'
};

export const optionsApi = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-52', 
  headers: {
    authorization: '42488cc5-fe94-4fe0-b1f0-0d91c1eb8880',
    'Content-Type': 'application/json'
  }
}

export const popupImage = document.querySelector('#popupOpenImg');
export const popupImg = popupImage.querySelector('.popup__img');
export const popupDescription = popupImage.querySelector('.popup__description');
export const buttonEdit = document.querySelector('.profile__edit-button');
export const buttonAdd = document.querySelector('.profile__add-button');
export const profileName = document.querySelector('.profile__title');
export const profileAbout = document.querySelector('.profile__subtitle');
export const nameInput = document.querySelector('#popup-name');
export const jobInput = document.querySelector('#popup-about');
