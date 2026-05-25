"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = __importDefault(require("events"));
const emitter = new events_1.default();
//create event listner
emitter.on("greet", (name) => {
    console.log(`Hello ${name}`);
});
emitter.emit("greet", "Krishna");
