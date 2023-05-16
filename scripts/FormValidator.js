export class FormValidator {
    constructor(config, formElement) {
        this._formElement = formElement;
        this._inputSelector = config.inputSelector;
        this._submitButton = config.submitButton;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
    }

    _setEventListeners() {
        const formInputs = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const formButton = this._formElement.querySelector(this._submitButton);
        this._disableButtonSubmit(formButton);
        formInputs.forEach(input => {
            input.addEventListener('input', () => {
                this._checkValidityInput(input);
                if (this._hasInvalidInput(formInputs)) {
                    this._disableButtonSubmit(formButton);
                }
                else {
                    this._enableButtonSubmit(formButton);
                }
            });
        });
    }

    _checkValidityInput = (inputElement) => {
        if (inputElement.validity.valid) {
            this._disableInputError(inputElement);
            this._hideInputError(inputElement);
        } else {
            this._enableInputError(inputElement);
            this._showInputError(inputElement);
        }
    }

    _hasInvalidInput = (formInputs) => {
        return formInputs.some(inputElement => !inputElement.validity.valid)
    }

    _enableInputError = (input) => {
        input.classList.add(this._inputErrorClass);
    }
    
    _disableInputError = (input) => {
        input.classList.remove(this._inputErrorClass);
    }

    _showInputError = (input) => {
        const inputName = input.getAttribute('name');
        const errorElement = document.getElementById(`${inputName}-error`);
        errorElement.textContent = input.validationMessage;
        errorElement.classList.add(this._errorClass);
    }
    
    _hideInputError = (input) => {
        const inputName = input.getAttribute('name');
        const errorElement = document.getElementById(`${inputName}-error`);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    }

    _disableButtonSubmit(button) {               
        button.classList.add(this._inactiveButtonClass);
        button.disabled = true;
    }

    _enableButtonSubmit(button) {
        button.classList.remove(this._inactiveButtonClass);
        button.disabled = false;
    }

    enableValidation() {
        this._setEventListeners();
    }

    resetError(){
        this._formElement.querySelectorAll(this._inputSelector).forEach((input) => {
            if (!input.validity.valid) {
                this._disableInputError(input);
                this._hideInputError(input);
            }        
        });
    }
    
    resetButton() {
        const buttonElement = this._formElement.querySelector(this._submitButton);
        this._disableButtonSubmit(buttonElement);
    }
}