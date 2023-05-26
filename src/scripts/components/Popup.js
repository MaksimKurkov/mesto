export class Popup {
    constructor(popupSelector){
        this.popupSelector = popupSelector;
        this._popup = document.querySelector(popupSelector);
    }

    openPopup() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    closePopup() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = (evt) =>{
        if (evt.code == "Escape") {
            this.closePopup();
        }
    }

    setEventListeners(){
        this._popup.querySelector('.popup__exit').addEventListener('click', () => { this.closePopup()});
        this._popup.addEventListener('click', (evt) => { if (evt.target == this._popup) {
                this.closePopup();
            };
        });
    }
}