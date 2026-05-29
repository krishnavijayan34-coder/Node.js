"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//experiment3
const fs_1 = __importDefault(require("fs"));
fs_1.default.readFile(__filename, () => {
    console.log("this is readFile 1");
});
process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is promise.resolve 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);
setImmediate(() => console.log("this is setImmediate 1"));
//experiment 2
//   import fs from "fs";
//   setTimeout(() => console.log("this is setTimeout 1"),0);
//   fs.readFile(__filename,() => {
//      console.log("this is readFile 1");
//   });
//experiment 1
// import fs from "fs";
//  fs.readFile(__filename,() => {
//     console.log("this is readFile 1");
//  });
//  process.nextTick(()=> console.log("this is process.nextTick 1"));
//  Promise.resolve().then(()=> console.log("this is promise.resolve 1"));
