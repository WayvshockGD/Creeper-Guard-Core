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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Base_1 = __importDefault(require("./Base"));
var Command = /** @class */ (function (_super) {
    __extends(Command, _super);
    function Command(command) {
        var _this = _super.call(this) || this;
        _this.name = command || '';
        _this.aliases = command || '';
        _this.category = command || '';
        _this.description = command || '';
        _this.cooldown = command || 0;
        _this.aliases = command || [];
        _this.usage = command || [];
        _this.channels = command || [];
        _this.permissions = command || [];
        _this.modOnly = command || false;
        _this.disabled = command || false;
        _this.spyOnly = command || false;
        _this.hidden = command || false;
        _this.ownerOnly = command || false;
        return _this;
    }
    Command.prototype.execute = function () { };
    return Command;
}(Base_1.default));
exports.default = Command;
