"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogMaster = /** @class */ (function () {
    function LogMaster(message, client, args, config, text) {
        var _a;
        return client.createMessage(config.log, {
            embed: {
                title: message.author.username + " Has Moderated " + ((_a = message.member) === null || _a === void 0 ? void 0 : _a.mention),
                fields: [
                    { name: 'Reason', value: "" + args[0], inline: false },
                    { name: 'Text', value: "" + text, inline: false },
                    { name: 'Channel', value: "<#" + message.channel.id + ">", inline: false }
                ],
                color: 0x42f55d
            }
        });
    }
    return LogMaster;
}());
exports.default = LogMaster;
