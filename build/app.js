"use strict";
var b = 'hello';
var number1 = 123123;
var number2 = 21345;
var sum = number1 + number2;
console.log(sum);
function howYouCanCall(userEnter) {
    return "".concat(userEnter.name, " ").concat(userEnter.surname);
}
var user = {
    name: 'Anton',
    surname: 'Pechatnov',
    country: 'Ukraine',
    city: 'Kyiv',
    age: 34,
    skills: {
        dev: true,
        cameraman: true,
    },
};
console.log(howYouCanCall(user));
