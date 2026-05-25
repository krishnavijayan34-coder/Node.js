import path from "path";

// current file path
console.log("File Path:");
console.log(__filename);

// current directory path
console.log("\nDirectory Path:");
console.log(__dirname);

//method 2
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

//method 3
console.log(path.extname(__filename));
console.log(path.extname(__dirname));

//method 4
console.log(path.parse(__filename));
console.log(path.format(path.parse(__filename)));

//method 5
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute("./copydata.json"));

//method 6 joined
console.log(path.join("folder1","folder2","index.html"));
console.log(path.join("/folder1","folder2","index.html"));
console.log(path.join("/folder1","//folder2","index.html"));
console.log(path.join("/folder1","//folder2","../index.html"));
console.log(path.join(__dirname,"copydata.json"));


//method 7 resolve
console.log(path.resolve("folder1","folder2","index.html"));
console.log(path.resolve("/folder1","folder2","index.html"));
console.log(path.resolve("/folder1","//folder2","index.html"));
console.log(path.resolve("/folder1","//folder2","../index.html"));
console.log(path.resolve(__dirname,"copydata.json"));







