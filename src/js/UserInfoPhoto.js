import {UserInfo} from './UserInfo';
export class UserInfoPhoto extends UserInfo {
    constructor(container, avatar){
      super(container);
      this.avatar = avatar;
      this.userPhoto = document.querySelector('.user-info__photo'); 
    }
  
    getAvatar(avatar){
      this.userPhoto.style.backgroundImage = 'url(' + avatar + ')';
    }
  
  }