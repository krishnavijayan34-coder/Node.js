"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//require("./batman");
//require("./superman");
const modulecatching_1 = __importDefault(require("./modulecatching"));
console.log(modulecatching_1.default.getName());
modulecatching_1.default.setName("Superman");
console.log(modulecatching_1.default.getName());
const modulecatching_2 = __importDefault(require("./modulecatching"));
console.log(modulecatching_2.default.getName());
