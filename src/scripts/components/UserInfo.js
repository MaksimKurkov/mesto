export class UserInfo {
    constructor(userNameSelector, userStatusSelector){
        this._userName = document.querySelector(userNameSelector);
        this._userStatus = document.querySelector(userStatusSelector);
    }

    getUserInfo(){
        const profileInfo = {
            name: this._userName.textContent,
            status: this._userStatus.textContent
        }
        return profileInfo;
    }

    setUserInfo(data){
        this._userName.textContent = data.nameInput;
        this._userStatus.textContent = data.statusInput;
    }
}