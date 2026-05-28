"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const server = http_1.default.createServer((req, res) => {
    const name = "Krishna Vijayan P";
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    //fs.createReadStream("../src/index.html").pipe(res);
    let html = fs_1.default.readFileSync(path_1.default.join(__dirname, "../src/index.html"), "utf-8");
    html = html.replace("{{name}}", name);
    res.end(html);
});
// 3000 is port number
server.listen(3000, () => {
    console.log("Server running on port 3000");
});
