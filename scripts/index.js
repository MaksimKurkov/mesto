import {standartPlaces} from "./InitialCards.js";
import {Card} from "./Card.js";
import {FormValidator} from "./FormValidator.js";
import {openPopupElement} from "./utils.js";
import {closePopupElement} from "./utils.js";

const popupEditProfile = document.querySelector(".popup-profile");
const popupAddPlace = document.querySelector(".popup-place");

const formEditProfile = document.querySelector(".popup-profile__form");
const formAddPlace = document.querySelector(".popup-place__form");

///Валидация форм///
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButton: '.popup__save',
    inactiveButtonClass: 'popup__save_inactive',
    inputErrorClass: 'popup__input_invalid',
    errorClass: 'popup__error_active',    
}

const validationformEditProfile = new FormValidator(validationConfig, formEditProfile);
const validationformAddPlace = new FormValidator(validationConfig, formAddPlace);

validationformEditProfile.enableValidation();
validationformAddPlace.enableValidation();

///Окрытие Попапов///
const popupOpenButtonProfile = document.querySelector(".profile__edit-button");
const popupOpenButtonPlace = document.querySelector(".profile__add-button");

popupOpenButtonProfile.addEventListener('click', function() {
    validationformEditProfile.resetError();
    validationformEditProfile.resetButton();
    popupInputName.value = profileName.textContent;
    popupInputStatus.value = profileStatus.textContent;
    openPopupElement(popupEditProfile);
})

popupOpenButtonPlace.addEventListener('click', function () {  
    validationformAddPlace.resetError();
    validationformAddPlace.resetButton();
    formAddPlace.reset();
    openPopupElement(popupAddPlace);
})

///Кнопки закрытия Попапов///
const closeButtons = document.querySelectorAll('.popup__exit');

closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopupElement(popup));
});

const closePopupByClickOverlay = () => {
    const popups = Array.from(document.querySelectorAll('.popup'));
    popups.forEach(popup => {
        popup.addEventListener('click', evt => {
            if (evt.target == evt.currentTarget) {
                closePopupElement(popup)
            };
        });
    });
}

closePopupByClickOverlay();

/////Попап ппрофиля /////
const popupFormProfile = document.querySelector(".popup-profile__form");
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const popupInputName = popupFormProfile.querySelector('.popup__input_type_name');
const popupInputStatus = popupFormProfile.querySelector('.popup__input_type_status');

function submitEditProfileForm(evt){
    evt.preventDefault();
    profileName.textContent = popupInputName.value;
    profileStatus.textContent = popupInputStatus.value;
    closePopupElement(popupEditProfile);
}

popupFormProfile.addEventListener('submit', submitEditProfileForm);

///Карточки///
const placeContainer = document.querySelector('.place-container');
const templateSelector = document.querySelector(".element-template").content.querySelector(".element");

function generateCard(card){
    const cardElement = card.generateCard();
    placeContainer.prepend(cardElement);
}


standartPlaces.forEach((element) =>{
    const card = new Card(element, templateSelector);
    generateCard(card);
})




/////Добавление карточки из попапа /////
const popupPlaceFormElement = document.querySelector(".popup-place__form");
const popupPlaceInputName = popupPlaceFormElement.querySelector('.popup__input_type_place');
const popupPlaceInputLink = popupPlaceFormElement.querySelector('.popup__input_type_link');

//Добавление карточки//
function addPlaceElement(evt) {
    evt.preventDefault();
    const newCard = new Card({
        name: popupPlaceInputName.value,
        link: popupPlaceInputLink.value,
        alt: popupPlaceInputName.value
    }, templateSelector);
    generateCard(newCard);
    closePopupElement(popupAddPlace);
    evt.target.reset();
}

popupPlaceFormElement.addEventListener('submit', addPlaceElement);

