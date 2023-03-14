/////Скрипты лайка/////

/*const LikeButton = document.getElementsByClassName('element__like')

/*for (var i = 0; i < LikeButton.length; i++) {
    LikeButton[i].addEventListener('click', LikeChek);
}

function LikeChek() {
    this.classList.toggle('element__like_active');
}*/

/////Скрипты Popup/////

const popupElement = document.querySelector(".popup");
const popupOpenButtonElement = document.querySelector(".profile__edit-button");
const popupCloseButtonElement = popupElement.querySelector(".popup__exit");

let popupFormElement = document.querySelector(".popup__form");

let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');
let popupNameInput = popupFormElement.querySelector('.popup__input_type_name');
let popupStatusInput = popupFormElement.querySelector('.popup__input_type_status');

function popupActive() {
    popupElement.classList.add('popup_opened');
    popupNameInput.value = profileName.textContent;
    popupStatusInput.value = profileStatus.textContent;
}

popupOpenButtonElement.addEventListener('click', popupActive);

function popupClose() {
    popupElement.classList.remove('popup_opened');
}

popupCloseButtonElement.addEventListener('click', popupClose);

function popupFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = popupNameInput.value;
    profileStatus.textContent = popupStatusInput.value;

    popupClose()
}

popupFormElement.addEventListener('submit', popupFormSubmit)