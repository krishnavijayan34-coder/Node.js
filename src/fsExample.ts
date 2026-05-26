
import fs from "fs";

//Synchronous Read file

const syncData: string = fs.readFileSync(
  "./data.txt",
  "utf-8"
);
console.log(syncData);

// Asynchronous Read
fs.readFile("./data.txt","utf-8",
    (error,data):void => {
        if(error) {
            console.log(error);
            return;
        }
        console.log(data);
    }
);

//  Synchronous Write File

fs.writeFileSync("./greet.txt","Hello World!");

// Asynchronous Write file

fs.writeFile("./greet.txt"," Hello Krishna!",{flag: "a" },(err)=> {
    if(err) {
        console.log(err);
    } else {
        console.log("File Written");
    }
});

