class PopupWithForm extends Popup {
    constructor(popup) {
        super(popup);
        this.form = this.popup.querySelector('form');
       // this.form.addEventListener('submit', this.onSubmit.bind(this));
    }
    onSubmit(event) {
        event.preventDefault();
        this.close(); //close
    }
  
    setEventListenersForm() {
       
        this.form.addEventListener('submit', this.onSubmit.bind(this));
      }
    
  }


  