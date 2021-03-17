import Eris from "eris";
import LogMaster from "../LogMaster";

class Kick {
    constructor(message: Eris.Message, client: Eris.Client, config: any, args: any) {
        try {
            client.kickGuildMember(config.guildID, `${message.member?.mention}`, `kicked by ${message.author.username}`);

            new LogMaster(message, client, args, config, `Member kicked by ${message.author.username}`);
        } catch (error) {
            return message.channel.createMessage({
                embed: {
                    description: `Error:\n${'```'}\n${error}\n${'```'}`
                }
            })
        }
    }
}

export default Kick;