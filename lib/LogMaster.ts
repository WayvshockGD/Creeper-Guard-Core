import Eris from "eris";

class LogMaster {
    constructor(message: Eris.Message, client: Eris.Client, args: string, config: any, text: string) {
        return client.createMessage(config.log, {
            embed: {
                title: `${message.author.username} Has Moderated ${message.member?.mention}`,
                fields: [
                    { name: 'Reason', value: `${args[0]}`, inline: false },
                    { name: 'Text', value: `${text}`, inline: false },
                    { name: 'Channel', value: `<#${message.channel.id}>`, inline: false }
                ],
                color: 0x42f55d
            }
        })
    }
}

export default LogMaster;