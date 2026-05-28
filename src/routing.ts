
import http from "http";

const server = http.createServer((req, res) => {

        if(req.url === "/") {
            res.writeHead(200,{"Content-Type":"text/plain"});
            res.end("Home page");

        } else if (req.url ==="/about") {
            res.writeHead(200,{"Content-Type":"text/plain"});
            res.end("About page");

        } else if (req.url ==="/api") {
            res.writeHead(200,{"Content-Type":"application/json"});
            res.end(JSON.stringify({
                firstName:"Krishna",
                lastName:"Vijayan P"
            }));
        } else  {
            res.writeHead(404,{"Content-Type":"text/plain"});
            res.end("Page not found");
        }

    });
  

// 3000 is port number
server.listen(3001, () => {
    console.log("Server running on port 3001");
});