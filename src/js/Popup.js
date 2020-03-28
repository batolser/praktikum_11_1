//готово
export class Popup {
  constructor(popup) {
    this.popup = popup;
    // слушатели здесь и в других классах пожалуйста устанавливайте в отдельном методе класса,
    // который отдельно вызывайте после инициализации объекта класса
    // Понятно, что этот обработчик для метода закрытия, который по идее нужен в любом попапе,
    // но представьте, что был переименован селектор, а конструктор наследуемого класса нельзя переопределить.
    //this.popup.querySelector('.popup__close').addEventListener('click', this.close.bind(this));
  }

  // Надо исправить -- ваши методы open и close по сути дублируют друг друга
  // их можно заменить на один метод, например такой
  //
// togglePopup() {
//   this.popup.classList.toggle('popup_is-opened');
//}
open() {
this.popup.classList.toggle('popup_is-opened');
}

 close() {
  this.popup.classList.remove('popup_is-opened');
 }



setEventListeners() {
  this.popup.querySelector('.popup__close').addEventListener('click', this.close.bind(this));

}

}