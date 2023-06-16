import {validationConfig,
        userNameSelector,
        userStatusSelector,
        userAvatarSelector,
        popupProfileSelector,
        popupOpenButtonProfile,
        popupFormProfile,
        popupProfileInputName,
        popupProfileInputStatus,
        popupPlaceSelector,
        popupPlaceInputName,
        popupPlaceInputLink,
        popupOpenButtonPlace,
        popupFormPlace,
        popupFormAvatar,
        popupAvatarSelector,
        popupOpenButtonAvatar,
        avatarUrl,
        popupAvatarInput,
        cardListSelector,
        templateSelector,
        popupImageSelector,
        popupDeleteSelector
        } from "../utils/constants.js";
import {Api} from "../components/Api.js";        
import {Card} from "../components/Card.js";
import {FormValidator} from "../components/FormValidator.js";
import {Section} from "../components/Section.js";
import {PopupWithImage} from "../components/PopupWithImage.js";
import {UserInfo} from "../components/UserInfo.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithSubmitForm} from "../components/PopupWithSubmitForm.js";
import '../../pages/index.css';

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-66',
    headers: {
      authorization: '5b878462-8b5e-47b3-8cf8-0c8e26a77099',
      'Content-Type': 'application/json'
    }
  })

let userId = null;

Promise.all([
    api.receiveUserInfo(),
    api.receiveCardsInfo()
  ])
  .then(([info, initialCards]) => {
    userInfo.setUserInfo(info);
    userInfo.setUserAvatar(info);
    userId = info._id;
    initialCards.forEach((data) => {
        cardList.addItem(сreateCard(data));
    })
  })
  .catch((err) => {
    console.log(err);
  })


//Section и Card//
const popupDelete = new PopupWithSubmitForm(popupDeleteSelector, handleDeleteConfirm);
popupDelete.setEventListeners();

const сreateCard = (data) => {
    const card = new Card(data,
        templateSelector,
        handleCardClick,
        (id) => {
            api.likeCard(id)
              .then((data) => {
                card.handleCardLike(data)
              })
              .catch((err) => {
                console.log(err);
              });
          },
        (id) => {
            api.deleteLike(id)
              .then((data) => {
                card.handleCardLike(data)
              })
              .catch((err) => {
                console.log(err);
              });
          },
        () => {
                popupDelete.open(card);               
              },
        userId);
    return card.generateCard();
}

function handleDeleteConfirm ({card, cardId}) {
  api.deleteCard(cardId)
  .then(() => {
      card.removeCard();
      popupDelete.close();
    })
    .catch((err) => {
      console.log(err);
    })
  }

const cardList = new Section({
    data: [],
    renderer: (item) => {
        const cardElement = сreateCard(item);
        cardList.addItem(cardElement);
    }
    }, cardListSelector);
cardList.renderItems();

const handleCardClick = (name, link) => {
    popupImage.open(name, link);
}

const popupImage = new PopupWithImage(popupImageSelector);
popupImage.setEventListeners();

///Валидация форм///
const validationformEditProfile = new FormValidator(validationConfig, popupFormProfile);
const validationformAddPlace = new FormValidator(validationConfig, popupFormPlace);
const validationformEditAvatar = new FormValidator(validationConfig, popupFormAvatar);

validationformEditProfile.enableValidation();
validationformAddPlace.enableValidation();
validationformEditAvatar.enableValidation();

///Данные профиля///
const userInfo = new UserInfo(userNameSelector, userStatusSelector, userAvatarSelector);

const popupProfile = new PopupWithForm(popupProfileSelector, handleProfileSubmit);
popupProfile.setEventListeners();

function handleProfileSubmit() {
  popupProfile.renderLoading(true)
  api.editProfileInfo({
    name: popupProfileInputName.value,
    about: popupProfileInputStatus.value
  })
  .then((data) => {
    userInfo.setUserInfo(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
      popupProfile.renderLoading(false)
  })
}

const editProfile = () => {
    validationformEditProfile.resetError();
    validationformEditProfile.resetButton();
    const userData = userInfo.getUserInfo();
    popupProfileInputName.value = userData.name;
    popupProfileInputStatus.value = userData.status;
    popupProfile.open();
}

popupOpenButtonProfile.addEventListener('click', editProfile);

///Новая карточка///
const popupNewCard = new PopupWithForm(popupPlaceSelector, handleCardSubmit);
popupNewCard.setEventListeners();

function handleCardSubmit() {
  popupNewCard.renderLoading(true)
  api.createNewCard({
    name: popupPlaceInputName.value,
    link: popupPlaceInputLink.value
  })
  .then((data) => {
    cardList.addItem(сreateCard(data));
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
      popupNewCard.renderLoading(false)
  })
}

const addCard = () => {
    validationformAddPlace.resetError();
    validationformAddPlace.resetButton();
    popupNewCard.open();
}

popupOpenButtonPlace.addEventListener('click', addCard)

//Аватарка
const popupAvatar = new PopupWithForm(popupAvatarSelector, handleAvatarSubmit);
popupAvatar.setEventListeners();

function handleAvatarSubmit() {
    popupAvatar.renderLoading(true)
    api.changeAvatar({
      avatar: popupAvatarInput.value
    })
    .then((data) => {
      userInfo.setUserAvatar(data);
    })
    .catch((err) => {
      console.log(err);
    })
      .finally(() => {
        popupAvatar.renderLoading(false)
      })
}

const editAvatar = () => {
    validationformEditAvatar.resetError();
    validationformEditAvatar.resetButton();
    popupAvatarInput.value = avatarUrl.src;
    popupAvatar.open();
}

popupOpenButtonAvatar.addEventListener('click', editAvatar)