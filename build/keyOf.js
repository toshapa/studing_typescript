"use strict";
// type KeysOfUser = keyof IUser
// const user: IUser = {
//     name: "TONY",
//     age: 34,
// }
var data = [
    { group: 1, name: "PIZDYK" },
    { group: 1, name: "HUILO" },
    { group: 2, name: "SHO" },
];
function group(array, key) {
    return array.reduce(function (map, item) {
        // console.log(map, item)
        var itemKey = item[key];
        var currentElement = map[itemKey];
        if (Array.isArray(currentElement)) {
            currentElement.push(item);
        }
        else {
            currentElement = [item];
        }
        map[itemKey] = currentElement;
        return map;
    }, {});
}
var resp = group(data, "group");
console.log(resp);
