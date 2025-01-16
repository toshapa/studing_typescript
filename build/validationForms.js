"use strict";
const form = {
    login: "tomy",
    password: "12345678",
};
const validationForm = {
    login: { isValid: true },
    password: { isValid: false, errorMassage: "Треба щось написати" },
};
