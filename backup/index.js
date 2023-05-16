import {standartPlaces} from "./InitialCards.js";
import {Card} from "./Card.js";

///Попапы///
const popupEditProfile = document.querySelector(".popup-profile");
const popupAddPlace = document.querySelector(".popup-place");
const popupExtendImage = document.querySelector(".popup-image");
const formEditProfile = document.querySelector(".popup-profile__form");
const formAddPlace = document.querySelector(".popup-place__form");

///Открытие и закрытие попапов///
const openPopupElement = function (popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupWithEsc);
}

const closePopupElement = function (popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupWithEsc);
}

///Кнопки окрытия Попапов///
const popupOpenButtonProfile = document.querySelector(".profile__edit-button");
const popupOpenButtonPlace = document.querySelector(".profile__add-button");
const popupOpenButtonImage = document.querySelector(".element__photo");

popupOpenButtonProfile.addEventListener('click', function() {
    resetError(formEditProfile);
    resetButton(formEditProfile);
    popupInputName.value = profileName.textContent;
    popupInputStatus.value = profileStatus.textContent;
    openPopupElement(popupEditProfile);
})

popupOpenButtonPlace.addEventListener('click', function () {  
    resetError(formAddPlace);
    resetButton(formAddPlace);
    formAddPlace.reset();
    openPopupElement(popupAddPlace);
})

///Кнопки закрытия Попапов///
const closeButtons = document.querySelectorAll('.popup__exit');

closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopupElement(popup));
});

const closePopupWithEsc = (evt) => {
    if (evt.code == "Escape") {
        const activePopup = document.querySelector('.popup_opened')
        if (activePopup) {
            closePopupElement(activePopup)
        }
    }
};

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

closePopupByClickOverlay()


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


const placeContainer = document.querySelector('.place-container');
const placeTemplate = document.querySelector('.element-template').content;
const popupPlacePhoto = popupExtendImage.querySelector('.popup__photo');
const popupPlaceTitle = popupExtendImage.querySelector('.popup__place');

//обработка карточки темплейта//
function createCard(item) {
    const placeElement = placeTemplate.querySelector('.element').cloneNode(true);
    const titulElement = placeElement.querySelector('.element__name');
    titulElement.textContent = item.name;
    const photoElement = placeElement.querySelector('.element__photo');
    photoElement.src = item.link;
    photoElement.alt = item.name;
    const likeElement = placeElement.querySelector('.element__like');
    const trashElement = placeElement.querySelector('.element__trash');


    //кнопка лайка//
    likeElement.addEventListener('click', () => {
        likeElement.classList.toggle('element__like_active');
    });

    //кнопка Удаления//
    trashElement.addEventListener('click', () => {
        placeElement.remove();
    });

    //Открытие увеличенных изображений//
    photoElement.addEventListener('click', () => {
        openPopupElement(popupExtendImage);
        popupPlacePhoto.src = photoElement.src;
        popupPlaceTitle.textContent = titulElement.textContent;
        popupPlacePhoto.alt = titulElement.textContent;
    });
    
    return placeElement;
};

//создание карточек для всех элементов//
standartPlaces.forEach(element => {
    const standartPlace = createCard(element);
    placeContainer.append(standartPlace);
});

/////Добавление карточки из попапа /////
const popupPlaceFormElement = document.querySelector(".popup-place__form");
const popupPlaceInputName = popupPlaceFormElement.querySelector('.popup__input_type_place');
const popupPlaceInputLink = popupPlaceFormElement.querySelector('.popup__input_type_link');

//Добавление карточки//
function addPlaceElement(evt) {
    evt.preventDefault();
    const newPlace = createCard({
        name: popupPlaceInputName.value,
        link: popupPlaceInputLink.value,
        alt: popupPlaceInputName.value
    })
    placeContainer.prepend(newPlace);
    closePopupElement(popupAddPlace);
    evt.target.reset();
}

popupPlaceFormElement.addEventListener('submit', addPlaceElement);

standartPlaces.forEach((element) =>{
    const card = new Card(element, '.element-template');
    const cardElement = card.generateCard();
    placeContainer.append(cardElement);
})