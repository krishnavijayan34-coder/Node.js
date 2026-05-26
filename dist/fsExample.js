"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
//Synchronous Read file
const syncData = fs_1.default.readFileSync("./data.txt", "utf-8");
console.log(syncData);
// Asynchronous Read
fs_1.default.readFile("./data.txt", "utf-8", (error, data) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log(data);
});
//  Synchronous Write File
fs_1.default.writeFileSync("./greet.txt", "Hello World!");
// Asynchronous Write file
fs_1.default.writeFile("./greet.txt", " Hello Krishna!", { flag: "a" }, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("File Written");
    }
});
