function Card({ card, onCardClick, onDeleteClick }) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="element">
      <button className="element__delete-button button" onClick={onDeleteClick}></button>
      <img src={card.link} alt={card.name} className="element__img" onClick={handleClick}/>
      <div className="element__footer">
        <h3 className="element__title">{card.name}</h3>
        <button className="element__like-button button" type="button" aria-label="Кнопка 'понравилось'"></button>
        <p className="element__like-counter">{card.likes.length}</p>
      </div>
    </article>
  )
}

export default Card;