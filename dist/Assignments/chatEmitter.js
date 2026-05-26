"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = __importDefault(require("events"));
class ChatEmitter extends events_1.default {
    sendMessage(message) {
        console.log("Sending Message...");
        this.emit("message", message);
    }
}
exports.default = ChatEmitter;
