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

  const classUserInfo = new UserInfo(/*userInfoName, userInfoJob,*/userInfoContainer, api);
  const userInfoPhoto = new UserInfoPhoto(userInfoContainer, api);

  //classUserInfo.setUserInfo(user.name, user.about);
  
  const cardList = new CardList(placesList, card, /*initialCards,*/ popupImg, api);
  cardList.setEventListeners();
 // const popupEditUser = new PopupEditUser(popupEdit, classUserInfo);

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
  userInfoButton.addEventListener('click', popupAddCard.open.bind(popupAddCard));//open

 
  
 const popupEditUser = new PopupEditUser(popupEdit, classUserInfo, popupButtonEdit, api);
  popupEditUser.setEventListenersForm();
  popupEditUser.setEventListeners();
  const editButton = document.querySelector('.edit-button');
  editButton.addEventListener('click', popupEditUser.open.bind(popupEditUser));

 
  
  //classUserInfo.setUserInfo(userInfoName.textContent, userInfoJob.textContent);

  // Надо исправить -- использование classUserInfo до определения объекта
  // Вообще лучше не смешивать вызоы методов и определение переменных, определите их в начале,
  // а потом вызывайте методы, добавляйте обработчики.
  //formEdit.addEventListener('submit', (event) => { classUserInfo.updateUserInfo(event) });
  //cardList.render();



  //const classUserInfo = new UserInfo(userInfoName, userInfoJob);
  //userInfo.setUserInfo(userInfoName.textContent, userInfoJob.textContent);

  //editButton.addEventListener('click', () => { classUserInfo.setUserInfo() });

  const classFormValidator = new FormValidator(form);
  classFormValidator.setEventListeners();

  const classFormEditValidator = new FormValidator(formEdit);
  classFormEditValidator.setEventListeners();

})()