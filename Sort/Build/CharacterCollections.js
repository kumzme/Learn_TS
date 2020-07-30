"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sorter_1 = require("./sorter");
var CharacterCollections = /** @class */ (function (_super) {
    __extends(CharacterCollections, _super);
    function CharacterCollections(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(CharacterCollections.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    CharacterCollections.prototype.compare = function (leftindex, rightIndex) {
        return (this.data[leftindex].toLowerCase() > this.data[rightIndex].toLowerCase());
    };
    CharacterCollections.prototype.swap = function (leftIndex, rightIndex) {
        var charArry = this.data.split('');
        var lefthhand = charArry[leftIndex];
        charArry[leftIndex] = charArry[rightIndex];
        charArry[rightIndex] = lefthhand;
        this.data = charArry.join('');
    };
    return CharacterCollections;
}(sorter_1.Sorter));
exports.CharacterCollections = CharacterCollections;
