import { Popup } from "./Popup.js";

export class PopupWithSubmitForm extends Popup{
    constructor(popupSelector, handleDeleteConfirm) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._handleDeleteConfirm = handleDeleteConfirm;
    }

    setSubmitAction(func){
        this.func = func;
    }

    open(card){
        super.open();
        this._card = card;
        this._cardId = card._id;
    }

    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleDeleteConfirm({card: this._card, cardId: this._cardId});
            this.close();
        });
    }
}