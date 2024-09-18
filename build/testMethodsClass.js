"use strict";
var StatusPayment;
(function (StatusPayment) {
    StatusPayment[StatusPayment["Holded"] = 0] = "Holded";
    StatusPayment[StatusPayment["Processed"] = 1] = "Processed";
    StatusPayment[StatusPayment["Reverse"] = 2] = "Reverse";
})(StatusPayment || (StatusPayment = {}));
var Payment = /** @class */ (function () {
    function Payment(id) {
        this.id = id;
        this.status = StatusPayment.Holded;
        this.createdAt = new Date();
    }
    Payment.prototype.getPaymentLifeTime = function () {
        return new Date().getTime() - this.createdAt.getTime();
    };
    Payment.prototype.unHoldPayment = function () {
        if (this.status === StatusPayment.Holded) {
            throw new Error("Nema groshey");
        }
        this.status = StatusPayment.Reverse;
        this.updateAt = new Date();
    };
    return Payment;
}());
var payment = new Payment(1);
// payment.unHoldPayment()
console.log(payment);
var transactionLifeTime = payment.getPaymentLifeTime();
console.log(transactionLifeTime);
