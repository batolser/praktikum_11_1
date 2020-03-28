import "./style.css";
import {Api} from './js/api';
import {Card} from './js/Card';
import {CardList} from './js/CardList';
import {FormValidator} from './js/FormValidator';
import {Popup} from './js/Popup';
import {PopupWithForm} from './js/PopupWithForm';
import {PopupAddCard} from './js/PopupAddCard';
import {PopupEditUser} from './js/PopupEditUser';
import {PopupImg} from './js/PopupImg';
import {UserInfo} from './js/UserInfo';
import {UserInfoPhoto} from './js/UserInfoPhoto';


(function () {

  

  const placesList = document.querySelector('.places-list');
  const form = document.forms.new;

  const userInfoButton = document.querySelector('.user-info__button');
  const popupPopup = document.querySelector('.popup');

  const userInfo = document.querySelector('.user-info');
  const popupEdit = document.querySelector('.popup__edit');

  const popupImage = document.querySelector('.popup__image');

  const formEdit = document.forms.edit;
  const userInfoName = document.querySelector('.user-info__name');
  const userInfoJob = document.querySelector('.user-info__job');
  
  
  const userInfoContainer = document.querySelector('.user-info');

  const popupButtonEdit = document.querySelector('.popup__button_edit');

  const popupImg = new PopupImg(popupImage);
  popupImg.setEventListeners();

  const card = new Card();

  const api = new Api({
    baseUrl: 'https://praktikum.tk/cohort8',
    headers: {
      authorization: '2e98d6dc-ed32-4eeb-9f4a-8bd31a2b65d0',
      'Content-Type': 'application/json'
    }
  });

 
  function createEditButton() {

    const editButton = document.createElement('button');
    editButton.classList.add('edit-button');
    userInfo.appendChild(editButton);
    editButton.textContent = 'Edit';
    return userInfo;
  }
  createEditButton();

  const classUserInfo = new UserInfo(userInfoContainer, api);
  const userInfoPhoto = new UserInfoPhoto(userInfoContainer, api);

  
  const cardList = new CardList(placesList, card, popupImg, api);
  cardList.setEventListeners();


  Promise.all([
    api.getInitialCards(),
    api.getUser()
  ])
  .then(([initialCards, user]) => {
  classUserInfo.setUserInfo(user.name, user.about);
  classUserInfo.updateUserInfo();
  userInfoPhoto.getAvatar(user.avatar);
  cardList.render(initialCards);
  }
     );

 

  const popupAddCard = new PopupAddCard(popupPopup, cardList);
 
  popupAddCard.setEventListenersForm();
  popupAddCard.setEventListeners();
  userInfoButton.addEventListener('click', popupAddCard.open.bind(popupAddCard));

 
  
 const popupEditUser = new PopupEditUser(popupEdit, classUserInfo, popupButtonEdit, api);
  popupEditUser.setEventListenersForm();
  popupEditUser.setEventListeners();
  const editButton = document.querySelector('.edit-button');
  editButton.addEventListener('click', popupEditUser.open.bind(popupEditUser));

 
  

  const classFormValidator = new FormValidator(form);
  classFormValidator.setEventListeners();

  const classFormEditValidator = new FormValidator(formEdit);
  classFormEditValidator.setEventListeners();

})()