export default interface ICommand {
    name: string;
    aliases: string[];
    category: string;
    modOnly: boolean;
    channels: string[];
    hidden: boolean;
    usage: string[];
    cooldown: number;
    description: string;
    permissions: string[];
    ownerOnly: boolean;
    disabled: boolean;
    spyOnly: boolean;
}