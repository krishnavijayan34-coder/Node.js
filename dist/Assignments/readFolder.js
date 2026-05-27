"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const folderpath = path_1.default.join(__dirname, "../../src/testFolder");
fs_1.default.readdir(folderpath, (err, files) => {
    if (err) {
        console.log("Error reading folder");
        return;
    }
    files.forEach((file) => {
        const fullPath = path_1.default.join(folderpath, file);
        fs_1.default.stat(fullPath, (err, stats) => {
            if (err) {
                console.log("Error getting file details");
                return;
            }
            const extension = path_1.default.extname(file);
            const fileName = path_1.default.basename(file, extension);
            console.log("file name:", fileName);
            console.log("Extension:", extension);
            console.log("Size", stats.size, "bytes");
        });
    });
});
