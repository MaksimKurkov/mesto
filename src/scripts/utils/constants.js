const KamchatkaImage = new URL('https://images.unsplash.com/photo-1605653799416-595e2b020d08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80', import.meta.url);
const KavkazImage = new URL('https://images.unsplash.com/photo-1658648000143-c1b6c814221b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2002&q=80', import.meta.url);
const UralImage = new URL('https://images.unsplash.com/photo-1604250016566-75da99e8c4af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80', import.meta.url);
const BaikalImage = new URL('https://images.unsplash.com/photo-1617835594990-7cd5a9b5d153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', import.meta.url);
const AltaiImage = new URL('https://images.unsplash.com/photo-1634206813058-44ccf5b33e50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80', import.meta.url);
const Karelia = new URL('https://images.unsplash.com/photo-1630763741619-cc347d3cba55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', import.meta.url);

export const standartPlaces = [
    {
        name: 'Камчатка',
        link: KamchatkaImage,
        alt: 'Камчатка'
    },
    {
        name: 'Кавказ',
        link: KavkazImage,
        alt: 'Кавказ'
    },
    {
        name: 'Урал',
        link: UralImage,
        alt: 'Урал'
    },
    {
        name: 'Байкал',
        link: BaikalImage,
        alt: 'Байкал'
    },
    {
        name: 'Алтай',
        link: AltaiImage,
        alt: 'Алтай'
    },
    {
        name: 'Карелия',
        link: Karelia,
        alt: 'Карелия'
    }
]


///Константы профиля////
export const userNameSelector = '.profile__name';
export const userStatusSelector = '.profile__status';

///Константы попапа профиля////
export const popupProfileSelector = '.popup-profile';
export const popupOpenButtonProfile = document.querySelector(".profile__edit-button");
export const popupFormProfile = document.querySelector(".popup-profile__form");
export const popupProfileInputName = popupFormProfile.querySelector('.popup__input_type_name');
export const popupProfileInputStatus = popupFormProfile.querySelector('.popup__input_type_status');

///Константы попапа карточки////
export const popupPlaceSelector = '.popup-place';
export const popupOpenButtonPlace = document.querySelector(".profile__add-button");
export const popupFormPlace = document.querySelector(".popup-place__form");
export const popupPlaceInputName = popupFormPlace.querySelector('.popup__input_type_place');
export const popupPlaceInputLink = popupFormPlace.querySelector('.popup__input_type_link');

///Константы попапа аватара////
export const popupFormAvatar = document.querySelector(".popup-avatar__form");

///Константы валидации////
export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButton: '.popup__save',
    inactiveButtonClass: 'popup__save_inactive',
    inputErrorClass: 'popup__input_invalid',
    errorClass: 'popup__error_active',    
}

///Константы карточек////
export const cardListSelector = '.place-container';
export const templateSelector = '.element-template';
export const popupImageSelector = '.popup-image';