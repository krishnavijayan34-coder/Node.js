"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const formatPath = path_1.default.format({
    root: "D:\\",
    dir: "D:\\projects\\node",
    base: "server.js"
});
console.log(formatPath);
