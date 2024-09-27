"use strict";
var data = [
    { id: 1, name: "Sergii" },
    { id: 2, name: "Anton" },
    { id: 3, name: "Chi" },
];
function getSortingMethod(data, type) {
    if (type === void 0) { type = "asc"; }
    // function methodSort()
    return data.sort(function (a, b) {
        switch (type) {
            case "asc":
                return a.id - b.id;
            case "desc":
                return b.id - a.id;
        }
    });
}
console.log(getSortingMethod(data, "desc"));
console.log(getSortingMethod(data));
