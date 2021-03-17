import Eris from "eris";
import LogMaster from "../LogMaster";

class Ban {
    constructor(message: Eris.Message, client: Eris.Client, config: any, args: any) {
        try {
            client.banGuildMember(config.guildID, `${message.member?.mention}`, 7, `Banned by ${message.author.username}`);

            new LogMaster(message, client, args, config, `Member banned by ${message.author.username}`);
        } catch (error) {
            return message.channel.createMessage({
                embed: {
                    description: `Error:\n${'```'}\n${error}\n${'```'}`
                }
            })
        }
    }
}

export default Ban;