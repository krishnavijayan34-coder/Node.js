"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    //set response header
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World!");
});
//3000 is port number
server.listen(3000, () => {
    console.log("server running on port 3000");
});
