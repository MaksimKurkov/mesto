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
    popupPlaceInputName.value = '';
    popupPlaceInputLink.value = '';
    openPopupElement(popupAddPlace);
})

///Кнопки закрытия Попапов///
const popupCloseButtonProfile = document.querySelector(".popup-profile__exit");
const popupCloseButtonPlace = document.querySelector(".popup-place__exit");
const popupCloseButtonImage = document.querySelector(".popup-image__exit");

popupCloseButtonProfile.addEventListener('click', function() {
    closePopupElement(popupEditProfile);
})

popupCloseButtonPlace.addEventListener('click', function() {
    closePopupElement(popupAddPlace);
})

popupCloseButtonImage.addEventListener('click', function() {
    closePopupElement(popupExtendImage);
})

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

//Инициализация стандартного массива//
const standartPlaces = [
    {
        name: 'Камчатка',
        link: 'https://images.unsplash.com/photo-1605653799416-595e2b020d08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80'
    },
    {
        name: 'Кавказ',
        link: 'https://images.unsplash.com/photo-1658648000143-c1b6c814221b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2002&q=80'
    },
    {
        name: 'Урал',
        link: 'https://images.unsplash.com/photo-1604250016566-75da99e8c4af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80'
    },
    {
        name: 'Байкал',
        link: 'https://images.unsplash.com/photo-1617835594990-7cd5a9b5d153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        name: 'Алтай',
        link: 'https://images.unsplash.com/photo-1634206813058-44ccf5b33e50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80'
    },
    {
        name: 'Карелия',
        link: 'https://images.unsplash.com/photo-1630763741619-cc347d3cba55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    }
]

const placeContainer = document.querySelector('.place-container');
const placeTemplate = document.querySelector('.element-template').content;
const popupPlacePhoto = popupExtendImage.querySelector('.popup__photo');
const popupPlaceTitle = popupExtendImage.querySelector('.popup__place');

//обработка карточки темплейта//
function reateCard(item) {
    const placeElement = placeTemplate.querySelector('.element').cloneNode(true);
    const titulElement = placeElement.querySelector('.element__name');
    titulElement.textContent = item.name;
    const photoElement = placeElement.querySelector('.element__photo');
    photoElement.src = item.link;
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
    const standartPlace = reateCard(element);
    placeContainer.append(standartPlace);
});

/////Добавление карточки из попапа /////
const popupPlaceFormElement = document.querySelector(".popup-place__form");
const popupPlaceInputName = popupPlaceFormElement.querySelector('.popup__input_type_place');
const popupPlaceInputLink = popupPlaceFormElement.querySelector('.popup__input_type_link');

//Добавление карточки//
function addPlaceElement(evt) {
    evt.preventDefault();
    const newPlace = reateCard({
        name: popupPlaceInputName.value,
        link: popupPlaceInputLink.value
    })
    placeContainer.prepend(newPlace);
    closePopupElement(popupAddPlace);
    evt.target.reset();
}

popupPlaceFormElement.addEventListener('submit', addPlaceElement);

