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

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleConfirmClick() {
    setConfirmPopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setConfirmPopupOpen(false);
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

      <PopupConfirm isOpen={isConfirmPopupOpen} onClose={closeAllPopups}></PopupConfirm>

      <PopupAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />

      <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>

      <Footer />

    </div>
  );
}

export default App;
