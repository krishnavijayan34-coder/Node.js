import fs from "fs";

const readableStream = fs.createReadStream("./data.txt",
    {
        encoding:"utf-8",
    }
);
const writableStream = fs.createWriteStream("./file2.txt");

readableStream.on("data",(chunk)=> {
    console.log(chunk)
    writableStream.write(chunk);
})