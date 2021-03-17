"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LogMaster_1 = __importDefault(require("../LogMaster"));
var Kick = /** @class */ (function () {
    function Kick(message, client, config, args) {
        var _a;
        try {
            client.kickGuildMember(config.guildID, "" + ((_a = message.member) === null || _a === void 0 ? void 0 : _a.mention), "kicked by " + message.author.username);
            new LogMaster_1.default(message, client, args, config, "Member kicked by " + message.author.username);
        }
        catch (error) {
            return message.channel.createMessage({
                embed: {
                    description: "Error:\n" + '```' + "\n" + error + "\n" + '```'
                }
            });
        }
    }
    return Kick;
}());
exports.default = Kick;
