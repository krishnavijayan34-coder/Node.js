"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const server = http_1.default.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    fs_1.default.createReadStream("../src/index.html").pipe(res);
    // const html =fs.readFileSync(path.join(__dirname, "../src/index.html"),"utf-8");
    // res.end(html);
});
// 3000 is port number
server.listen(3000, () => {
    console.log("Server running on port 3000");
});
