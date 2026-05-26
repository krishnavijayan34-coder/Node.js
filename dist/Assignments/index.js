"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const chatEmitter_1 = __importDefault(require("./chatEmitter"));
const chat = new chatEmitter_1.default();
const r1 = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
chat.on("message", (message) => {
    console.log(`New Message:${message}`);
    askMessage();
});
function askMessage() {
    r1.question("Enter Message: ", (message) => {
        if (message === "exit") {
            console.log("Chat Closed");
            r1.close();
            return;
        }
        chat.sendMessage(message);
    });
}
console.log("Chat Application Started");
askMessage();
