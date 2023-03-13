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
const popupCloseButtonElement = popupElement.querySelector(".popup__exit");
const popupOpenButtonElement = document.querySelector(".profile__edit-button");

function popupActive() {
    popupElement.classList.add('popup_opened');
}

function popupClose() {
    popupElement.classList.remove('popup_opened');
}

popupOpenButtonElement.addEventListener('click', popupActive);
popupCloseButtonElement.addEventListener('click', popupClose);

/////Скрипты данных/////

let name = document.querySelector('.profile__name').innerHTML;
let status = document.querySelector('.profile__status').innerHTML;
let popupName = document.querySelector('.popup__input_type_name');
let popupStatus = document.querySelector('.popup__input_type_status');

popupName.value = name;
popupStatus.value = status;

const popupSaveButtonElement = popupElement.querySelector(".popup__save");

function popupSave() {
    document.querySelector('.profile__name').innerHTML = popupName.value;
    document.querySelector('.profile__status').innerHTML = popupStatus.value;
    popupElement.classList.remove('popup_opened');
}

popupSaveButtonElement.addEventListener('click', popupSave);
