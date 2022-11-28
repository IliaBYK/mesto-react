import {useState, useEffect, memo} from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import AddPlacePopup from './AddPlacePopup';
import PopupConfirm from './PopupConfirm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import ImagePopup from './ImagePopup';
import CurrentUserContext from './context/CurrentUserContext';
import api from '../utils/Api';

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [deletingCard, setDeletingCard] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getServerUserInfo()
      .then((userData) => {
        setCurrentUser(userData)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    api.getInitialCards()
      .then((cards) => {
        setCards(cards);
      }).catch((err) => console.log(err))
  }, [])
  
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

  function handleConfirmClick(card) {
    setDeletingCard(card);
    setIsConfirmPopupOpen(true);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
      .catch((err) => console.error(err.message));;
  }
  
  function handleCardDelete(card) {
    setIsLoading(true);
    return api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
        closeAllPopups();
      })
      .catch((err) => console.error(err.message))
      .finally(() => setIsLoading(false));
  }

  function handleAddPlaceSubmit(inputs) {
    setIsLoading(true);
    return api.postServerCard(inputs)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.error(err.message))
      .finally(() => setIsLoading(false));
  }

  function handleUpdateUser(inputs) {
    setIsLoading(true);
    return api.setServerUserInfo(inputs)
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch((err) => console.error(err.message))
      .finally(() => setIsLoading(false));
  }

  function handleUpdateAvatar(inputs) {
    setIsLoading(true);
    return api.setUserAvatar(inputs)
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch((err) => console.error(err.message))
      .finally(() => setIsLoading(false));
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">

        <Header />

        <Main onAddPlace={handleAddPlaceClick} 
          onEditProfile={handleEditProfileClick} 
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onDeleteClick={handleConfirmClick}
          onCardLike={handleCardLike}
          onCardDelete={handleConfirmClick}
          cards={cards}/>

        <AddPlacePopup 
          isLoading={isLoading}
          isOpen={isAddPlacePopupOpen} 
          onClose={closeAllPopups} 
          onSubmit={handleAddPlaceSubmit}/>

        <EditProfilePopup 
          isLoading={isLoading}
          isOpen={isEditProfilePopupOpen} 
          onClose={closeAllPopups} 
          onSubmit={handleUpdateUser}/>

        <PopupConfirm 
          isLoading={isLoading}
          isOpen={isConfirmPopupOpen} 
          onClose={closeAllPopups} 
          onSubmit={() => handleCardDelete(deletingCard)}
          card={deletingCard}/>

        <EditAvatarPopup 
          isLoading={isLoading}
          isOpen={isEditAvatarPopupOpen} 
          onClose={closeAllPopups} 
          onSubmit={handleUpdateAvatar} 
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <Footer />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default memo(App);
