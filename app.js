"use strict";
const b = 'hello';
let number1 = 123123;
let number2 = 21345;
const sum = number1 + number2;
console.log(sum);
function howYouCanCall(userEnter) {
    return `${userEnter.name} ${userEnter.surname}`;
}
const user = {
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
