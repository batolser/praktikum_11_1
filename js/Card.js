class Card {
  like(event) {
    event.target.classList.toggle('place-card__like-icon_liked');
  }

  remove(event) {
    event.target.closest('.place-card').remove();
  }

  create(card) {

    const placeCard = document.createElement('div');
    const placeCardImage = document.createElement('div');
    const placeCardDeleteIcon = document.createElement('button');
    const placeCardDescription = document.createElement('div');
    const placeCardName = document.createElement('h3');
    const placeCardLikeIcon = document.createElement('button');

    placeCard.classList.add('place-card');



    placeCardImage.classList.add('place-card__image');

    placeCard.appendChild(placeCardImage);


    placeCardDeleteIcon.classList.add('place-card__delete-icon');
    placeCardImage.appendChild(placeCardDeleteIcon);


    placeCardDescription.classList.add('place-card__description');
    placeCard.appendChild(placeCardDescription);


    placeCardName.classList.add('place-card__name');

    placeCardDescription.appendChild(placeCardName);


    placeCardLikeIcon.classList.add('place-card__like-icon');
    placeCardDescription.appendChild(placeCardLikeIcon);

    // Можно лучше
    // Используйте строки-шаблоны https://learn.javascript.ru/es-string#stroki-shablony
    placeCardImage.style.backgroundImage = 'url(' + card.link + ')';
    placeCardName.textContent = card.name;

    return placeCard;
  }


}