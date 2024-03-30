"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pathDataJsonLocal = './data/data.json';
var skillsArray = ['DoP', 'Cameraman', 'Juny Dev'];
var infoData = {
    officeId: 45,
    isOpened: true,
    contacts: {
        phone: '+3232342342',
        email: 'hgf@jmdfjdlk.com',
        address: {
            city: 'Kyiv',
        },
    },
};
// fs.readFile(pathDataJsonLocal, 'utf-8')
//     .then((data) => JSON.parse(data))
//     .then((resp) => console.log(resp))
//     .catch((err) => console.log(err))
for (var _i = 0, skillsArray_1 = skillsArray; _i < skillsArray_1.length; _i++) {
    var skill = skillsArray_1[_i];
    console.log("Is yuor skills ".concat(skill));
}
var newSkillsArray = skillsArray
    .filter(function (skill) { return skill !== 'DoP'; })
    .map(function (skill) { return skill + " shit "; })
    .reduce(function (a, b) { return a + b; });
var newbeSkilldepends = [
    123,
    'DoP',
    'Cameraman',
    'Fron-End Develeper ',
];
var id = newbeSkilldepends[0];
var cinemaSkills = newbeSkilldepends.filter(function (skill) { return typeof skill !== 'number'; });
// console.log(cinemaSkills)
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode["FAILED"] = "Sun";
    StatusCode["IN_PROCESS"] = "Night";
})(StatusCode || (StatusCode = {}));
var respFromBank = {
    message: 'Все добре',
    statusCode: StatusCode.SUCCESS,
};
console.log(respFromBank);
