(()=>{"use strict";var e=document.querySelector(".profile__edit-button"),t=document.querySelector(".popup-profile__form"),n=t.querySelector(".popup__input_type_name"),r=t.querySelector(".popup__input_type_status"),o=document.querySelector(".profile__add-button"),i=document.querySelector(".popup-place__form"),u=i.querySelector(".popup__input_type_place"),a=i.querySelector(".popup__input_type_link"),c=document.querySelector(".popup-avatar__form"),l=document.querySelector(".profile__avatar-edit"),s=(document.querySelector(".profile__avatar"),document.querySelector(".popup__input_type_avatar")),f={formSelector:".popup__form",inputSelector:".popup__input",submitButton:".popup__save",inactiveButtonClass:"popup__save_inactive",inputErrorClass:"popup__input_invalid",errorClass:"popup__error_active"};function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"receiveUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._checkingResponse)}},{key:"receiveCardsInfo",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._checkingResponse)}},{key:"editProfileInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkingResponse)}},{key:"createNewCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._checkingResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkingResponse)}},{key:"likeCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkingResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkingResponse)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkingResponse)}},{key:"_checkingResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==v(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}var m=function(){function e(t,n,r,o,i,u,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._image=t.link,this._likes=t.likes,this._id=t._id,this._userId=a,this._ownerId=t.owner._id,this._handleLike=o,this._handleRemoveLike=i,this._templateSelector=n,this._handleCardClick=r,this._deleteCardClick=u}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".element__like"),this._likeCounter=this._element.querySelector(".element__like-numbers"),this._likeCounter.textContent=this._likes.length,this._cardImage=this._element.querySelector(".element__photo"),this._cardImage.src=this._image,this._cardImage.alt=this._name,this._element.querySelector(".element__name").textContent=this._name,this._deleteButton=this._element.querySelector(".element__trash"),this.isLiked(),this.showDeleteButton(),this._setEventListeners(),this._element}},{key:"showDeleteButton",value:function(){this._ownerId===this._userId?(this._deleteButton.style.display="block",this._deleteButton.disabled=!1):(this._deleteButton.style.display="none",this._deleteButton.disabled=!0)}},{key:"isLiked",value:function(){var e=this;this._likes.forEach((function(t){t._id===e._userId&&e._likeButton.classList.toggle("element__like_active")}))}},{key:"handleCardLike",value:function(e){this._likes=e.likes,this._likeCounter.textContent=this._likes.length,this._likeButton.classList.toggle("element__like_active")}},{key:"removeCard",value:function(){this._element.remove(),this._element=null,this._likeButton=null,this._cardImage=null}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._likeButton.classList.contains("element__like_active")?e._handleRemoveLike(e._id):(console.log(e._id),e._handleLike(e._id))})),this._element.querySelector(".element__trash").addEventListener("click",(function(){e._deleteCardClick()})),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._image)}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,g(r.key),r)}}function g(e){var t=function(e,t){if("object"!==_(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===_(t)?t:String(t)}var S=function(){function e(t,n){var r,o,i,u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,i=function(e){e.validity.valid?u._hideInputError(e):u._showInputError(e,e.validationMessage)},(o=g(o="_checkValidityInput"))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,this._formElement=n,this._inputSelector=t.inputSelector,this._submitButton=t.submitButton,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._buttonElement=this._formElement.querySelector(this._submitButton),this._formInputs=Array.from(this._formElement.querySelectorAll(this._inputSelector))}var t,n;return t=e,(n=[{key:"_setEventListeners",value:function(){var e=this;this._disableButtonSubmit(),this._formInputs.forEach((function(t){t.addEventListener("input",(function(){e._checkValidityInput(t),e._hasInvalidInput(e._formInputs)?e._disableButtonSubmit():e._enableButtonSubmit()}))}))}},{key:"_hasInvalidInput",value:function(){return this._formInputs.some((function(e){return!e.validity.valid}))}},{key:"_showInputError",value:function(e,t){var n=document.getElementById("".concat(e.getAttribute("name"),"-error"));n.textContent=t,n.classList.add(this._errorClass),e.classList.add(this._inputErrorClass)}},{key:"_hideInputError",value:function(e){var t=document.getElementById("".concat(e.getAttribute("name"),"-error"));t.classList.remove(this._errorClass),t.textContent="",e.classList.remove(this._inputErrorClass)}},{key:"_disableButtonSubmit",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_enableButtonSubmit",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetError",value:function(){var e=this;this._formElement.querySelectorAll(this._inputSelector).forEach((function(t){t.validity.valid||e._hideInputError(t)}))}},{key:"resetButton",value:function(){this._disableButtonSubmit()}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==k(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}var E=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.append(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,P(r.key),r)}}function P(e){var t=function(e,t){if("object"!==j(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===j(t)?t:String(t)}var C=function(){function e(t){var n,r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,o=function(e){"Escape"===e.code&&i.close()},(r=P(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this.popupSelector=t,this._popup=document.querySelector(this.popupSelector)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__exit").addEventListener("click",(function(){e.close()})),this._popup.addEventListener("click",(function(t){t.target===e._popup&&e.close()}))}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==L(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},B.apply(this,arguments)}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupPhoto=t._popup.querySelector(".popup__photo"),t._popupTitul=t._popup.querySelector(".popup__place"),t}return t=u,(n=[{key:"open",value:function(e,t){this._popupPhoto.src=t,this._popupPhoto.alt=e,this._popupTitul.textContent=e,B(T(u.prototype),"open",this).call(this)}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(C);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==A(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===A(o)?o:String(o)),r)}var o}var D=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(t),this._userStatus=document.querySelector(n),this._userAvatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,status:this._userStatus.textContent}}},{key:"getUserAvatar",value:function(){return{avatar:this._userAvatar.src}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userStatus.textContent=e.about}},{key:"setUserAvatar",value:function(e){this._userAvatar.src=e.avatar}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==U(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===U(o)?o:String(o)),r)}var o}function V(){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=F(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},V.apply(this,arguments)}function J(e,t){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},J(e,t)}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&J(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=F(r);if(o){var n=F(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===U(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitForm=t,n._form=n._popup.querySelector(".popup__form"),n._inputs=Array.from(n._form.querySelectorAll(".popup__input")),n._button=n._popup.querySelector(".popup__save"),n._buttonDefault=n._button.textContent,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"renderLoading",value:function(e){this._button.textContent=e?"Сохранение...":this._buttonDefault}},{key:"close",value:function(){V(F(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var e=this;V(F(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())}))}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(C);function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==M(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===M(o)?o:String(o)),r)}var o}function $(){return $="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=K(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},$.apply(this,arguments)}function G(e,t){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},G(e,t)}function K(e){return K=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},K(e)}var Q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&G(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=K(r);if(o){var n=K(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===M(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._form=n._popup.querySelector(".popup__form"),n._handleDeleteConfirm=t,n}return t=u,(n=[{key:"setSubmitAction",value:function(e){this.func=e}},{key:"open",value:function(e){$(K(u.prototype),"open",this).call(this),this._item=e,this._itemId=e._id}},{key:"setEventListeners",value:function(){var e=this;$(K(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleDeleteConfirm({item:e._item,itemId:e._itemId})}))}}])&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(C);function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var X=new h({url:"https://mesto.nomoreparties.co/v1/cohort-66",headers:{authorization:"5b878462-8b5e-47b3-8cf8-0c8e26a77099","Content-Type":"application/json"}}),Y=null;Promise.all([X.receiveUserInfo(),X.receiveCardsInfo()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ae.setUserInfo(o),ae.setUserAvatar(o),Y=o._id,i.forEach((function(e){te.addItem(ee(e))}))})).catch((function(e){console.log(e)}));var Z=new Q(".popup-delete",(function(e){var t=e.item,n=e.itemId;X.deleteCard(n).then((function(){t.removeCard(),Z.close()})).catch((function(e){console.log(e)}))}));Z.setEventListeners();var ee=function(e){var t=new m(e,".element-template",ne,(function(e){X.likeCard(e).then((function(e){t.handleCardLike(e)})).catch((function(e){console.log(e)}))}),(function(e){X.deleteLike(e).then((function(e){t.handleCardLike(e)})).catch((function(e){console.log(e)}))}),(function(){Z.open(t)}),Y);return t.generateCard()},te=new E({data:[],renderer:function(e){var t=ee(e);te.addItem(t)}},".place-container");te.renderItems();var ne=function(e,t){re.open(e,t)},re=new q(".popup-image");re.setEventListeners();var oe=new S(f,t),ie=new S(f,i),ue=new S(f,c);oe.enableValidation(),ie.enableValidation(),ue.enableValidation();var ae=new D(".profile__name",".profile__status",".profile__avatar"),ce=new H(".popup-profile",(function(){ce.renderLoading(!0),X.editProfileInfo({name:n.value,about:r.value}).then((function(e){ae.setUserInfo(e),ce.close()})).catch((function(e){console.log(e)})).finally((function(){ce.renderLoading(!1)}))}));ce.setEventListeners(),e.addEventListener("click",(function(){oe.resetError(),oe.resetButton();var e=ae.getUserInfo();n.value=e.name,r.value=e.status,ce.open()}));var le=new H(".popup-place",(function(){le.renderLoading(!0),X.createNewCard({name:u.value,link:a.value}).then((function(e){te.addItem(ee(e)),le.close()})).catch((function(e){console.log(e)})).finally((function(){le.renderLoading(!1)}))}));le.setEventListeners(),o.addEventListener("click",(function(){ie.resetError(),ie.resetButton(),le.open()}));var se=new H(".popup-avatar",(function(){se.renderLoading(!0),X.changeAvatar({avatar:s.value}).then((function(e){ae.setUserAvatar(e),se.close()})).catch((function(e){console.log(e)})).finally((function(){se.renderLoading(!1)}))}));se.setEventListeners(),l.addEventListener("click",(function(){ue.resetError(),ue.resetButton();var e=ae.getUserAvatar();s.value=e.avatar,se.open()}))})();