"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
//reusable function
function createSafePath(...folders) {
    return path_1.default.join(...folders);
}
const filePath = createSafePath("projects", "nodejs", "src", "index.js");
console.log("Safe Cross Platform Path:");
console.log(filePath);
