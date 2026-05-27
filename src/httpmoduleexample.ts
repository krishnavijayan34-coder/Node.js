import http from "http";
const server = http.createServer((req,res)=> {
    //set response header
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.end("Hello World!");
    });
//3000 is port number
    server.listen(3000,()=>{
        console.log("server running on port 3000");
    });