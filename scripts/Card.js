import {openPopupElement} from "./utils.js";
import {popupImage} from "./utils.js";

export class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._image = data.link;
        this._alt = data.alt;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardElement = this._templateSelector.cloneNode(true);
    return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._likeButton = this._element.querySelector('.element__like');
        this._cardImage = this._element.querySelector('.element__photo');
        this._setEventListeners();   
        this._cardImage.src = this._image;
        this._cardImage.alt = this._alt;
        this._element.querySelector('.element__name').textContent = this._name;
    
        return this._element;
    }

    _getLike() {
        this._likeButton.classList.toggle('element__like_active');
    }

    _removeCard() {
        this._element.remove();
        this._element = null;
    }

    _expandImage() {
        popupImage.querySelector('.popup__photo').src = this._image;
        popupImage.querySelector('.popup__photo').alt = this._alt;
        popupImage.querySelector('.popup__place').textContent = this._name;
        openPopupElement(popupImage);
    }


    _setEventListeners() {
        this._likeButton.addEventListener('click', () => { this._getLike()});
        this._element.querySelector('.element__trash').addEventListener('click', () => { this._removeCard()});
        this._cardImage.addEventListener('click', () => { this._expandImage()});
    }
}