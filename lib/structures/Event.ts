import IEvent from "../interfaces/IEvent";

class Event implements IEvent {
    name: string;
    enabled?: boolean;

    constructor(event: any) {
        this.name    = event || '';
        this.enabled = event || false;
    }

    protected execute() { }
}

export default Event;