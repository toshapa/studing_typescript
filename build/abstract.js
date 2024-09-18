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
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.printDate = function (date) {
        this.log(date.toString());
    };
    return Logger;
}());
var MyLogger = /** @class */ (function (_super) {
    __extends(MyLogger, _super);
    function MyLogger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyLogger.prototype.log = function (message) {
        console.log(message);
    };
    MyLogger.prototype.logWithDate = function (message) {
        this.printDate(new Date());
        this.log(message);
    };
    return MyLogger;
}(Logger));
var logger = new MyLogger();
logger.logWithDate("sho");
