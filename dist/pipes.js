"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const zlib_1 = __importDefault(require("zlib"));
const readableStream = fs_1.default.createReadStream("./data.txt", {
    encoding: "utf-8",
});
const gzip = zlib_1.default.createGzip();
readableStream.pipe(gzip).pipe(fs_1.default.createWriteStream("./file2.txt.gz"));
const writableStream = fs_1.default.createWriteStream("./file2.txt");
readableStream.pipe(writableStream);
console.log("Streams Completed");
