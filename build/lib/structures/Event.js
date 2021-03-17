"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Event = /** @class */ (function () {
    function Event(event) {
        this.name = event || '';
        this.enabled = event || false;
    }
    Event.prototype.execute = function () { };
    return Event;
}());
exports.default = Event;
