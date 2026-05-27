import http from "http";
const server = http.createServer((req,res)=> {

   //set response header
    res.writeHead(200, {"Content-Type":"application/json"});
    
  

    const data = {
        name:"Krishna",
        course:"AE&I",
        message:"Helllo from json server"
    };
    res.end(JSON.stringify(data));
});

//3000 is port number
    server.listen(3000,()=>{
        console.log("server running on port 3000");
    });