"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const currentTime = new Date().toLocaleTimeString();
const message = `Program executed at ${currentTime}\n`;
fs_1.default.appendFile("log.txt", message, (err) => {
    if (err) {
        console.log("Error");
        return;
    }
    console.log("Log saved");
});
