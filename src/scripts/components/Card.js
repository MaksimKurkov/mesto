export class Card {
    constructor(data, templateSelector, handleCardClick, handleLike, handleRemoveLike, deleteCardClick, userId) {
        this._name = data.name;
        this._image = data.link;
        this._likes = data.likes;
        this._id = data._id;
        this._userId = userId;
        this._ownerId = data.owner._id;
        this._handleLike = handleLike;
        this._handleRemoveLike = handleRemoveLike;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._deleteCardClick = deleteCardClick;

    }

    _getTemplate() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(true);
    return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._likeButton = this._element.querySelector('.element__like');
        this._likeCounter = this._element.querySelector('.element__like-numbers');
        this._likeCounter.textContent = this._likes.length;
        this._cardImage = this._element.querySelector('.element__photo');       
        this._cardImage.src = this._image;
        this._cardImage.alt = this._name;
        this._element.querySelector('.element__name').textContent = this._name;
        this._deleteButton = this._element.querySelector('.element__trash');
        this.isLiked();
        this.showDeleteButton();
        this._setEventListeners();
        return this._element;
    }

    showDeleteButton() {
        if (this._ownerId === this._userId) {
            this._deleteButton.style.display = 'block';
            this._deleteButton.disabled = false;
        } else {
            this._deleteButton.style.display = 'none';
            this._deleteButton.disabled = true;
        }
    }

    isLiked() {
        this._likes.forEach((like) => {
            if (like._id === this._userId) {
                this._likeButton.classList.toggle('element__like_active');
            }
        })
    }

    handleCardLike(data) {
        this._likes = data.likes;
        this._likeCounter.textContent = this._likes.length;
        this._likeButton.classList.toggle('element__like_active');
    }

    removeCard() {
        this._element.remove();
        this._element = null;
        this._likeButton = null;
        this._cardImage = null;
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => {
            if (this._likeButton.classList.contains('element__like_active')) {
              this._handleRemoveLike(this._id)
            } else {
                console.log(this._id);
              this._handleLike(this._id)
            }
          });
        this._element.querySelector('.element__trash').addEventListener('click', () => {
            this._deleteCardClick()});
        this._cardImage.addEventListener('click', () => { this._handleCardClick(this._name, this._image)});
    }
}