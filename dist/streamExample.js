"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const readableStream = fs_1.default.createReadStream("./data.txt", {
    encoding: "utf-8",
});
const writableStream = fs_1.default.createWriteStream("./file2.txt");
readableStream.on("data", (chunk) => {
    console.log(chunk);
    writableStream.write(chunk);
});
