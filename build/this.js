"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AnotherPayment = /** @class */ (function () {
    function AnotherPayment() {
        this.date = new Date();
    }
    AnotherPayment.prototype.getDate = function () {
        return this.date;
    };
    AnotherPayment.prototype.getArrowDate = function () {
        return this.date;
    };
    return AnotherPayment;
}());
var newDate = new AnotherPayment();
var newUser1 = {
    id: 1,
    payment: newDate.getDate.bind(newDate),
};
var PaymentPersistant = /** @class */ (function (_super) {
    __extends(PaymentPersistant, _super);
    function PaymentPersistant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaymentPersistant.prototype.save = function () {
        return _super.prototype.getDate.call(this);
    };
    return PaymentPersistant;
}(AnotherPayment));
console.log(newDate.getDate());
console.log(newUser1.payment());
console.log(newDate.getArrowDate());
// console.log(new PaymentPersistant().getDate())
