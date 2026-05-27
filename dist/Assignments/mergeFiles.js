"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
fs_1.default.readFile("file1.txt", "utf-8", (err, data1) => {
    if (err) {
        console.log("Error reading file1");
        return;
    }
    fs_1.default.readFile("file2.txt", "utf-8", (err, data2) => {
        if (err) {
            console.log("Error reading file2");
            return;
        }
        fs_1.default.readFile("file3.txt", "utf-8", (err, data3) => {
            if (err) {
                console.log("Error reading file3");
                return;
            }
            const mergedContent = data1 + "\n" + data2 + "\n" + data3;
            fs_1.default.writeFile("merged.txt", mergedContent, (err) => {
                if (err) {
                    console.log("error writing merged file");
                    return;
                }
                console.log("Files merged successfully");
            });
        });
    });
});
