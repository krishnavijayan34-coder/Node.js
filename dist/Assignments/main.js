"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
//current file name
console.log(path_1.default.basename(__filename));
//file extension
console.log(path_1.default.extname(__filename));
//Directory name
console.log(path_1.default.dirname(__filename));
