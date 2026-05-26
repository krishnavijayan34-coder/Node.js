import fs from "fs";
import zlib from "zlib";

const readableStream = fs.createReadStream("./data.txt",
     {
        encoding:"utf-8",
    }
);

const gzip =zlib.createGzip();
readableStream.pipe(gzip).pipe(fs.createWriteStream("./file2.txt.gz"))

const writableStream = fs.createWriteStream("./file2.txt");

readableStream.pipe(writableStream);

console.log("Streams Completed");