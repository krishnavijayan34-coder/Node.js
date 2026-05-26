"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("fs/promises"));
async function readFileData() {
    try {
        const data = await promises_1.default.readFile("./data.txt", "utf-8");
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}
readFileData();
