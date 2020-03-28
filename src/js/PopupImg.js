import {Popup} from './Popup';

export class PopupImg extends Popup {
    constructor(popup){
      super(popup);
  
     
      
    }
  
    openImg(event){
        this.popup.querySelector('.popup__img_view').src = event.target.style.backgroundImage.slice(5, -2)
        this.open();//open
    }
  
    
  }