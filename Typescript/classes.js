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
var Shape1D = /** @class */ (function () {
    function Shape1D(length) {
        this.length = length;
    }
    return Shape1D;
}());
var Shape2D = /** @class */ (function (_super) {
    __extends(Shape2D, _super);
    function Shape2D(length, breadth) {
        var _this = _super.call(this, length) || this;
        _this.breadth = breadth;
        return _this;
    }
    return Shape2D;
}(Shape1D));
var Shape3D = /** @class */ (function (_super) {
    __extends(Shape3D, _super);
    function Shape3D(length, breadth, height) {
        var _this = _super.call(this, length, breadth) || this;
        _this.height = height;
        return _this;
    }
    return Shape3D;
}(Shape2D));
var shape3d = new Shape3D(30, 40, 50);
console.log(shape3d);
var coords = {
    x: 10,
    y: 20,
    z: 30
};
console.log(coords);
