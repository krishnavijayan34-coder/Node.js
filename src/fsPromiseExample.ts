
import fs from "fs/promises";

async function readFileData(): Promise<void> {
    try {
    
    const data:string = await fs.readFile("./data.txt","utf-8");
    
    console.log(data);
    
}

catch (error) {
    console.log(error);
 }
    
}

readFileData();

