import path from "path";
const formatPath=path.format({
    root: "D:\\",
    dir:"D:\\projects\\node",
    base:"server.js"
});
console.log(formatPath);