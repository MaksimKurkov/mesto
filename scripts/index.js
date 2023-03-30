///Попапы///
const popupProfile = document.querySelector(".popup-profile");
const popupPlace = document.querySelector(".popup-place");
const popupImage = document.querySelector(".popup-image");

///Открытие и закрытие попапов///
const open = function (popup) {
  popup.classList.add('popup_opened');
}

const close = function (popup) {
  popup.classList.remove('popup_opened');
}

///Кнопки окрытия Попапов///
const popupOpenButtonProfile = document.querySelector(".profile__edit-button");
const popupOpenButtonPlace = document.querySelector(".profile__add-button");
const popupOpenButtonImage = document.querySelector(".element__photo");

popupOpenButtonProfile.addEventListener('click', function() {
  open(popupProfile);
})

popupOpenButtonPlace.addEventListener('click', function() {
  open(popupPlace);
})

//popupOpenButtonImage.addEventListener('click', function() {
//  open(popupImage);
//})



///Кнопки закрытия Попапов///
const popupCloseButtonProfile = document.querySelector(".popup-profile__exit");
const popupCloseButtonPlace = document.querySelector(".popup-place__exit");
const popupCloseButtonImage = document.querySelector(".popup-image__exit");

popupCloseButtonProfile.addEventListener('click', function() {
    close(popupProfile);
    popupNameInput.value = profileName.textContent;
    popupStatusInput.value = profileStatus.textContent;
})

popupCloseButtonPlace.addEventListener('click', function() {
  close(popupPlace);
})

popupCloseButtonImage.addEventListener('click', function() {
  close(popupImage);
})

/////Попап ппрофиля /////
let popupFormProfile = document.querySelector(".popup-profile__form");

let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');
let popupNameInput = popupFormProfile.querySelector('.popup__input_type_name');
let popupStatusInput = popupFormProfile.querySelector('.popup__input_type_status');

popupNameInput.value = profileName.textContent;
popupStatusInput.value = profileStatus.textContent;

function profileIdit(evt){
    evt.preventDefault();
    profileName.textContent = popupNameInput.value;
    profileStatus.textContent = popupStatusInput.value;
    close(popupProfile);
}

popupFormProfile.addEventListener('submit', profileIdit);

//Инициализация стандартного массива//
const standartplaces = [
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

//обработка карточки темплейта//
function renderItem(item) {
    const placeElement = placeTemplate.querySelector('.element').cloneNode(true);
    placeElement.querySelector('.element__name').textContent = item.name;
    placeElement.querySelector('.element__photo').src = item.link;
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
     
    return placeElement;
};

//создание карточек для всех элементов//
standartplaces.forEach(element => {
    let newPlace = renderItem(element);
    placeContainer.append(newPlace);
});

/////Добавление карточки из попапа /////
let popupPlaceFormElement = document.querySelector(".popup-place__form");
let popupPlaceNameInput = popupPlaceFormElement.querySelector('.popup-place__input_type_place');
let popupPlaceLinkInput = popupPlaceFormElement.querySelector('.popup-place__input_type_link');

//Добавление карточки//
function addPlaceElement(evt) {
    evt.preventDefault();
    const addPlace = renderItem({
        name: popupPlaceNameInput.value,
        link: popupPlaceLinkInput.value
    })
    placeContainer.prepend(addPlace);
    close(popupPlace);
    popupPlaceNameInput.value = '';
    popupPlaceLinkInput.value = '';
}

popupPlaceFormElement.addEventListener('submit', addPlaceElement);

//Попап увеличенной картинки//
