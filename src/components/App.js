import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupAdd from './PopupAdd';
import PopupConfirm from './PopupConfirm';
import PopupEdit from './PopupEdit';
import PopupAvatar from './PopupAvatar';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleConfirmClick() {
    setIsConfirmPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">

      <Header />

      <Main onAddPlace={handleAddPlaceClick} 
        onEditProfile={handleEditProfileClick} 
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onDeleteClick={handleConfirmClick}/>

      <PopupAdd isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />

      <PopupEdit isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />

      <PopupConfirm isOpen={isConfirmPopupOpen} onClose={closeAllPopups} />

      <PopupAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <Footer />

    </div>
  );
}

export default App;
