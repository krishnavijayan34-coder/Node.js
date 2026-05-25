"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
// current file path
console.log("File Path:");
console.log(__filename);
// current directory path
console.log("\nDirectory Path:");
console.log(__dirname);
//method 2
console.log(path_1.default.basename(__filename));
console.log(path_1.default.basename(__dirname));
//method 3
console.log(path_1.default.extname(__filename));
console.log(path_1.default.extname(__dirname));
//method 4
console.log(path_1.default.parse(__filename));
console.log(path_1.default.format(path_1.default.parse(__filename)));
//method 5
console.log(path_1.default.isAbsolute(__filename));
console.log(path_1.default.isAbsolute("./copydata.json"));
//method 6 joined
console.log(path_1.default.join("folder1", "folder2", "index.html"));
console.log(path_1.default.join("/folder1", "folder2", "index.html"));
console.log(path_1.default.join("/folder1", "//folder2", "index.html"));
console.log(path_1.default.join("/folder1", "//folder2", "../index.html"));
console.log(path_1.default.join(__dirname, "copydata.json"));
//method 7 resolve
console.log(path_1.default.resolve("folder1", "folder2", "index.html"));
console.log(path_1.default.resolve("/folder1", "folder2", "index.html"));
console.log(path_1.default.resolve("/folder1", "//folder2", "index.html"));
console.log(path_1.default.resolve("/folder1", "//folder2", "../index.html"));
console.log(path_1.default.resolve(__dirname, "copydata.json"));
