class UserBuilder {
    name: string

    setName(name: string): this {
        this.name = name
        return this
    }

    isAdmin(): this is AdminBuilder {
        return this instanceof AdminBuilder
    }
}

class AdminBuilder extends UserBuilder {
    roles: string
}

const response = new UserBuilder().setName("Hello Kitty")
const response2 = new AdminBuilder().setName("Spanch Bob")

let userView: UserBuilder | AdminBuilder = new UserBuilder()

if (userView.isAdmin()) {
    console.log(userView)
} else {
    console.log(userView)
}
