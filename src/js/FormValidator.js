export class FormValidator {

  constructor(element) {

    this.element = element;
  }

  checkInputValidity(event) {
    const errorMessage = event.target.closest('div').querySelector('.popup__input-error');

    if (event.target.validity.valueMissing) {
      return errorMessage.textContent = 'Это обязательное поле';
    }
    if (event.target.validity.tooShort || event.target.validity.tooLong) {
      return errorMessage.textContent = 'Должно быть от 2 до 30 символов';
    }

    errorMessage.textContent = ' ';
  }

  setSubmitButtonState(event) {

    const button = event.target.closest('.popup').querySelector('.popup__button');
    // Можно лучше
    // Так к формам по индексам лучше не обращаться, лучше получить элемент формы
    if (event.target.form[0].validity.valid && event.target.form[1].validity.valid) {
      button.classList.remove('popup__button_disabled');
      button.removeAttribute('disabled');

    }
    else {
      button.classList.add('popup__button_disabled');
      button.setAttribute('disabled', true);
    }
  }

  setEventListeners() {
    this.element.addEventListener('input', this.setSubmitButtonState);
    this.element.addEventListener('input', this.checkInputValidity);
  }
}

