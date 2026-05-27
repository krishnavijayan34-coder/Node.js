import http from "http";
const server = http.createServer((req,res)=> {
    //set response header
    res.writeHead(200, {
        "content-Type":"text/plain"
    });
})