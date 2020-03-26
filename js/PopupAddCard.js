class PopupAddCard extends PopupWithForm {
    constructor(popup, cardList) {
        super(popup);
        this.cardList = cardList;
    }
    onSubmit(event) {
        super.onSubmit(event);
        const name = event.target.querySelector('.popup__input_type_name').value;
        const link = event.target.querySelector('.popup__input_type_link-url').value;
        this.cardList.addCard({name, link});
    }
    open() {
        super.open(); //open
        this.form.reset();
    }

    close(){
        super.close();
     }
  }