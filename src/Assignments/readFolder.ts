import fs from "fs";
import path from "path";

const folderpath = path.join(__dirname, "../../src/testFolder");
fs.readdir(folderpath,(err,files: string[])=> {
    if(err) {
        console.log("Error reading folder");
        return;
    }
    files.forEach((file:string)=>{
        const fullPath = path.join(folderpath,file);
        fs.stat(fullPath,(err,stats)=>{
            if(err) {
                console.log("Error getting file details");
                return;
            }
            const extension : string=path.extname(file);
            const fileName:string=path.basename(file,extension);

            console.log("file name:",fileName);
            console.log("Extension:",extension);
            console.log("Size",stats.size,"bytes");



        });
    });
});