"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const readline_1 = __importDefault(require("readline"));
const r1 = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("Enter your name:", (name) => {
    r1.question("Enter your age:", (age) => {
        r1.question("Enter your place:", (place) => {
            const data = `Name:${name}\nAge: ${age}\nPlace:${place}`;
            fs_1.default.writeFile("user.txt", data, (err) => {
                if (err) {
                    console.log("Error wrriting file ");
                    return;
                }
                console.log("User details saved successfully");
                r1.close();
            });
        });
    });
});
