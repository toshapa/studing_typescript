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
var Commodity = /** @class */ (function () {
    function Commodity(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
    return Commodity;
}());
var Delivery = /** @class */ (function () {
    function Delivery(date) {
        this.date = date;
    }
    return Delivery;
}());
var HomeDelivery = /** @class */ (function (_super) {
    __extends(HomeDelivery, _super);
    function HomeDelivery(date, address) {
        var _this = _super.call(this, new Date()) || this;
        _this.address = address;
        return _this;
    }
    return HomeDelivery;
}(Delivery));
var Cart = /** @class */ (function () {
    function Cart() {
        this.product = [];
    }
    Cart.prototype.addProduct = function (product) {
        this.product.push(product);
    };
    Cart.prototype.deleteProductById = function (idProduct) {
        this.product = this.product.filter(function (p) { return p.id !== idProduct; });
    };
    Cart.prototype.getSum = function () {
        return this.product
            .map(function (p) { return p.price; })
            .reduce(function (p1, p2) { return p1 + p2; });
    };
    Cart.prototype.setDelivery = function (delivery) {
        this.delivery = delivery;
    };
    Cart.prototype.chekcOut = function () {
        if (this.product.length === 0) {
            throw new Error("Don`t have any product");
        }
        if (!this.delivery) {
            throw new Error("Don`t have any product");
        }
        return { success: true };
    };
    return Cart;
}());
var cart = new Cart();
cart.addProduct(new Commodity(1, "Orange", 30));
cart.addProduct(new Commodity(2, "Apple", 25));
cart.addProduct(new Commodity(3, "Sandvich", 45));
cart.getSum();
cart.deleteProductById(2);
// cart.setDelivery(new HomeDelivery(new Date(), ""))
console.log(cart.chekcOut());
console.log(cart.getSum());
