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
        this._setEventListeners();
    
        this._element.querySelector('.element__photo').src = this._image;
        this._element.querySelector('.element__photo').alt = this._alt;
        this._element.querySelector('.element__name').textContent = this._name;
    
        return this._element;
    }

  

    _setEventListeners() {
        this._element.querySelector('.element__photo').addEventListener('click', () => {
            popupImage.querySelector('.popup__photo').src = this._image;
            popupImage.querySelector('.popup__photo').alt = this._alt;
            popupImage.querySelector('.popup__place').textContent = this._name;
            openPopupElement(popupImage);
        });
   
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._element.querySelector('.element__like').classList.toggle('element__like_active');
        })

        this._element.querySelector('.element__trash').addEventListener('click', () => {
            this._element.remove();
        })
    }
}