"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LogMaster_1 = __importDefault(require("../LogMaster"));
var Ban = /** @class */ (function () {
    function Ban(message, client, config, args) {
        var _a;
        try {
            client.banGuildMember(config.guildID, "" + ((_a = message.member) === null || _a === void 0 ? void 0 : _a.mention), 7, "Banned by " + message.author.username);
            new LogMaster_1.default(message, client, args, config, "Member banned by " + message.author.username);
        }
        catch (error) {
            return message.channel.createMessage({
                embed: {
                    description: "Error:\n" + '```' + "\n" + error + "\n" + '```'
                }
            });
        }
    }
    return Ban;
}());
exports.default = Ban;
