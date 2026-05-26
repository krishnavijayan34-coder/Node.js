import EventEmitter from "events";

export default class ChatEmitter extends EventEmitter {
    sendMessage(message: string): void {
        console.log("Sending Message...");

        this.emit("message",message);
    }
}