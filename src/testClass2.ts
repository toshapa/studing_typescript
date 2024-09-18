class UserPassword {
    _login: string
    password: string

    set login(l: string) {
        this._login = "user_" + l
    }

    get login() {
        return "no_login"
    }
}

const userPassword = new UserPassword()
userPassword.login = "myLogin"
console.log(userPassword._login)
console.log(userPassword)
console.log(userPassword.login)
