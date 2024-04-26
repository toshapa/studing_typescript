"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_fs_1 = require("node:fs");
var pathDataJsonLocal = "./data.json";
var skillsArray = ["DoP", "Cameraman", "Juny Dev"];
// async function infoData(): Promise<USER> {
//     const rawData = await fetch(pathDataJsonLocal, {
//         method: "GET",
//     })
//     const processedData = await rawData.json()
//     console.log(processedData)
//     return processedData
// }
// infoData()
// : Promise<{
//     officeId: number
//     isOpened: boolean
//     contacts: {
//         phone: string
//         email: string
//         address: { city: string }
//     }
// }, []>
node_fs_1.promises.readFile(pathDataJsonLocal, "utf-8")
    .then(function (data) { return JSON.parse(data); })
    .then(function (resp) { return console.log(resp); })
    .catch(function (err) { return console.log(err); });
// for (let skill of skillsArray) {
//     console.log(`Is yuor skills ${skill}`)
// }
var newSkillsArray = skillsArray
    .filter(function (skill) { return skill !== "DoP"; })
    .map(function (skill) { return skill + " shit "; })
    .reduce(function (a, b) { return a + b; });
var newbeSkilldepends = [
    123,
    "DoP",
    "Cameraman",
    "Fron-End Develeper ",
];
var id = newbeSkilldepends[0];
var cinemaSkills = newbeSkilldepends.filter(function (skill) { return typeof skill !== "number"; });
var respFromBank = {
    message: "Все добре",
    statusCode: 1 /* StatusCode.SUCCESS */,
};
// console.log(respFromBank)
// enum checkFetchAuth {
//     GET = 'get',
//     POST = 'post',
// }
// function fetchId(url: string, method: 'GET' | 'POST') {
//     console.log()
// }
