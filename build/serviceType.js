"use strict";
const p = {};
class User {
    constructor(id, name) {
        this.id = id;
    }
}
function getData(id) {
    return new User(id, "Jack");
}
