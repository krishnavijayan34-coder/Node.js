"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const parsedPath = path_1.default.parse("C:/Users/Admin/Documents/report.pdf");
console.log(parsedPath.root);
console.log(parsedPath.dir);
console.log(parsedPath.base);
console.log(parsedPath.ext);
console.log(parsedPath.name);
