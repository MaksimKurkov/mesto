import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        
    }

    openPopup(imageTitul, imageUrl) {        
        this._popup.querySelector('.popup__photo').src = imageUrl;
        this._popup.querySelector('.popup__photo').alt = imageTitul;
        this._popup.querySelector('.popup__place').textContent = imageTitul;
        super.openPopup();
    }
}