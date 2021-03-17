import Eris from "eris";

class Base {

    public sendMessage(message: Eris.Message, text: string) {
        return message.channel.createMessage({
            embed: {
                description: `${text}`,
                color: 0x42f55a
            }
        })
    }

    public sendError(message: Eris.Message, text: string) {
        return message.channel.createMessage({
            embed: {
                description: `${text}`,
                color: 0xf54e42
            }
        })
    }

    async giveRole(message: Eris.Message, guild: Eris.Guild, client: Eris.Client, findRole: string) {
        try {
            let role = guild.roles.find((r: Eris.Role) => r.id === findRole) 
                   || guild.roles.find((r: Eris.Role) => r.mention === findRole);

            await client.editGuildMember(guild.id, message.author.id, { roles: [`${role?.id}`]});
        } catch (error) {
            console.error(error);
        }
    }

    async pin(message: Eris.Message, pin?: boolean) {
            if (pin == true) {

            try {
                await message.pin();
            } catch (error) {
                console.error(error);
            }

        } else if (pin == false) {

            try {
                await message.unpin();
            } catch (error) {
                console.error(error)
            }

        } else if (pin == undefined) {

            try {
                await message.pin();
            } catch (error) {
                console.error(error);
            }

        }
    }

}

export default Base;