import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, onDeleteClick }) {

  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("https://images.unsplash.com/photo-1666681086233-0ea2686179a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getServerUserInfo(), api.getInitialCards()])
      .then(([userData, cards]) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
      setCards(cards);
    }).catch((err) => console.log(err))
  }, [])

  const cardElements = cards.map((cardItem) => (<Card key={cardItem._id} 
    card={cardItem} onCardClick={onCardClick} onDeleteClick={onDeleteClick} />))

  return (
    <main className="container">

      <section className="profile">
        <div className="profile__avatar-container">
          <div className="profile__avatar-overlay">
            <div className="profile__avatar-pen" onClick={onEditAvatar}></div>
          </div>
          <img src={userAvatar} alt="Аватар профиля" className="profile__avatar" />
        </div>

        <div className="profile__info">
          <div className="profile__head">
            <h1 className="profile__title">{userName}</h1>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
          <button className="profile__edit-button button" type="button" onClick={onEditProfile} aria-label="Кнопка редактирования профиля"></button>
        </div>
        <button className="profile__add-button button" type="button" onClick={onAddPlace} aria-label="Кнопка добавления"></button>
      </section>

      <section className="elements">
        {cardElements}
      </section>
    </main>
  )
}

export default Main;
