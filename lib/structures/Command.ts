import Base from './Base';
import ICommand from "../interfaces/ICommand";

class Command extends Base implements ICommand {
    cooldown: number;
    name: string;
    category: string;
    description: string;
    aliases: string[];
    usage: string[];
    channels: string[];
    permissions: string[];
    modOnly: boolean;
    disabled: boolean;
    spyOnly: boolean;
    hidden: boolean;
    ownerOnly: boolean;

    constructor(command: any) {
        super();

        this.name         = command || '';
        this.aliases      = command || '';
        this.category     = command || '';
        this.description  = command || '';
        this.cooldown     = command || 0;
        this.aliases      = command || [];
        this.usage        = command || [];
        this.channels     = command || [];
        this.permissions  = command || [];
        this.modOnly      = command || false;
        this.disabled     = command || false;
        this.spyOnly      = command || false;
        this.hidden       = command || false;
        this.ownerOnly    = command || false;
    }

    protected execute() { }
}

export default Command;