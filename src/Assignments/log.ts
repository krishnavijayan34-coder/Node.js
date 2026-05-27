import fs from "fs";
const currentTime = new Date().toLocaleTimeString();
const message = `Program executed at ${currentTime}\n`;

fs.appendFile("log.txt",message,(err)=> {
    if(err) {
        console.log("Error");
        return;
    }
    console.log("Log saved");
});