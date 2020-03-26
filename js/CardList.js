//готово
class CardList {

  constructor(container, card, /*initialCards,*/ popupImg) {
    this.container = container;
    this.card = card;
   // this.initialCards = initialCards;
    this.popupImg = popupImg;

    // Надо исправить
    // Очень плохая практика в конструкторе выполнять методы класса или устанавливать обработчики.
    // Если другой класс будет наследовать этот, то конструктор выполнится в любом случае,
    // его нельзя переопределить. Но, возможно, наследующему классу не нужно чтобы
    // эти методы выполнялись, а слушатели устанавливались.
    // Конструктор лучше использовать для инициализации переменных класса.
    // Установку слушателей и прочие служебные моменты лучше вынести в отдельные методы.
    //container.addEventListener('click', this.events.bind(this));
  }

  addCard(card) {

    const element = this.card.create(card);
    this.container.appendChild(element);
  }
  render(initialCards) {
    for (const element of initialCards) {

      this.addCard(element);
    }
  }

  events(event) {
    if (event.target.classList.contains('place-card__like-icon')) {
      this.card.like(event);
    }
    if (event.target.classList.contains('place-card__delete-icon')) {
      this.card.remove(event);
    }
    if (event.target.classList.contains('place-card__image')) {
      this.popupImg.openImg(event);
 }
  }
  setEventListeners() {
    this.container.addEventListener('click', this.events.bind(this));
  }
}