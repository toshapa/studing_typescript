var User = /** @class */ (function () {
    function User(nameOrAge, age) {
        if (typeof nameOrAge === "string") {
            this.name = nameOrAge;
        }
        else if (typeof nameOrAge === "number") {
            this.age = nameOrAge;
        }
        if (typeof age === "number") {
            this.age = age;
        }
    }
    return User;
}());
var newUser = new User("Kicha");
var newUser2 = new User();
var newUser3 = new User(234);
var newUser4 = new User("tony", 345);
console.log(newUser.name);
console.log(newUser);
newUser.name = "Hocha";
console.log(newUser.name);
var Admin = /** @class */ (function () {
    function Admin(role) {
        this.role = role;
    }
    return Admin;
}());
var maestroAdmin = new Admin(1234);
console.log(maestroAdmin.role);
maestroAdmin.role = 234324;
console.log(maestroAdmin.role);
