"use strict";
function processUser(name, callback) {
    console.log("Processing user ...");
    callback(name);
}
processUser("Krishna", (message) => {
    console.log("Hello " + message);
});
console.log("End");
