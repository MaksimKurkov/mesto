import {standartPlaces,
        validationConfig,
        userNameSelector,
        userStatusSelector,
        popupProfileSelector,
        popupOpenButtonProfile,
        popupFormProfile,
        popupProfileInputName,
        popupProfileInputStatus,
        popupPlaceSelector,
        popupOpenButtonPlace,
        popupFormPlace,
        popupPlaceInputName,
        popupPlaceInputLink,
        cardListSelector,
        templateSelector,
        popupImageSelector
        } from "../utils/constants.js";
import {Card} from "../components/Card.js";
import {FormValidator} from "../components/FormValidator.js";
import {Section} from "../components/Section.js";
import {PopupWithImage} from "../components/PopupWithImage.js";
import {UserInfo} from "../components/UserInfo.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import '../../pages/index.css';


//Section и Card//

const сreateCard = ({name, link}) => {
    const card = new Card({name, link}, templateSelector, (name, link) => {popupImage.open(name, link)});
    return card.generateCard();
}

const cardList = new Section({
    data: standartPlaces,
    renderer: (item) => {
        const cardElement = сreateCard(item);
        cardList.addItem(cardElement);
    }
    }, cardListSelector);
cardList.renderItems();

const popupImage = new PopupWithImage(popupImageSelector);
popupImage.setEventListeners();

///Валидация форм///
const validationformEditProfile = new FormValidator(validationConfig, popupFormProfile);
const validationformAddPlace = new FormValidator(validationConfig, popupFormPlace);

validationformEditProfile.enableValidation();
validationformAddPlace.enableValidation();

///Данные профиля///
const userInfo = new UserInfo(userNameSelector, userStatusSelector);

const editUserInfo = (data) => {
    userInfo.setUserInfo(data);
}

const popupProfile = new PopupWithForm(popupProfileSelector, editUserInfo);
popupProfile.setEventListeners();

const editProfile = () => {
    validationformEditProfile.resetError();
    validationformEditProfile.resetButton();
    const {name, status} = userInfo.getUserInfo();
    popupProfileInputName.value = name;
    popupProfileInputStatus.value = status;
    popupProfile.open();
}

popupOpenButtonProfile.addEventListener('click', editProfile);

///Новая карточка///
const addNewCard = (data) => {
    const newCardElement = сreateCard({name: data.placeInput,
            link: data.linkInput});
    cardList.addItem(newCardElement);
}

const popupNewCard = new PopupWithForm(popupPlaceSelector, addNewCard);
popupNewCard.setEventListeners();

const addCard = () => {
    validationformAddPlace.resetError();
    validationformAddPlace.resetButton();
    popupNewCard.open();
}

popupOpenButtonPlace.addEventListener('click', addCard)

