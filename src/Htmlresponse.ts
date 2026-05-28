import http from "http";
import fs from "fs";
import path from "path";
const server = http.createServer((req, res) => {
const name ="Krishna Vijayan P"
    res.writeHead(200, {
        "Content-Type": "text/html"
        
    });
    //fs.createReadStream("../src/index.html").pipe(res);
    let html =fs.readFileSync(path.join(__dirname, "../src/index.html"),"utf-8");
    html = html.replace("{{name}}",name);
     res.end(html);
});

// 3000 is port number
server.listen(3000, () => {
    console.log("Server running on port 3000");
});