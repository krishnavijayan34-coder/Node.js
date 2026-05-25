import path from "path";

//reusable function
function createSafePath(...folders:string[]): string {
      return path.join(...folders);
}

const filePath=createSafePath(
    "projects",
    "nodejs",
    "src",
    "index.js"
);
console.log("Safe Cross Platform Path:");
console.log(filePath);