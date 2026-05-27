import fs from "fs";

fs.readFile("file1.txt","utf-8",(err,data1)=> {
    if(err) {
        console.log("Error reading file1");
        return;
    }
    fs.readFile("file2.txt","utf-8",(err,data2)=> {
    if(err) {
        console.log("Error reading file2");
        return;
    }
    fs.readFile("file3.txt","utf-8",(err,data3)=> {
    if(err) {
        console.log("Error reading file3");
        return;
    }

    const mergedContent = data1 + "\n" + data2 + "\n" + data3;

    fs.writeFile("merged.txt",mergedContent,(err) =>{
        if (err) {
            console.log("error writing merged file");
            return;
        }
        console.log("Files merged successfully");
    });
});
});
});