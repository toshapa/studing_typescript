class User {
    name!: string
    age!: number

    constructor()
    constructor(name: string)
    constructor(age: number)
    constructor(name: string, age: number)
    constructor(nameOrAge?: string | number, age?: number) {
        if (typeof nameOrAge === "string") {
            this.name = nameOrAge
        } else if (typeof nameOrAge === "number") {
            this.age = nameOrAge
        }
        if (typeof age === "number") {
            this.age = age
        }
    }
}

const newUser = new User("Kicha")
const newUser2 = new User()
const newUser3 = new User(234)
const newUser4 = new User("tony", 345)

console.log(newUser.name)
console.log(newUser)

newUser.name = "Hocha"
console.log(newUser.name)

class Admin {
    role: number

    constructor(role: number) {
        this.role = role
    }
}

const maestroAdmin = new Admin(1234)
console.log(maestroAdmin.role)
maestroAdmin.role = 234324
console.log(maestroAdmin.role)
