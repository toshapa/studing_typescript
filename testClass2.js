var UserPassword = /** @class */ (function () {
    function UserPassword() {
    }
    Object.defineProperty(UserPassword.prototype, "login", {
        get: function () {
            return "no_login";
        },
        set: function (l) {
            this._login = "user_" + l;
        },
        enumerable: false,
        configurable: true
    });
    return UserPassword;
}());
var userPassword = new UserPassword();
userPassword.login = "myLogin";
console.log(userPassword._login);
console.log(userPassword);
console.log(userPassword.login);
