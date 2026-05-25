"use strict";
function processUser1(name, callback) {
    console.log("Processing user..");
    setTimeout(() => {
        callback(name);
    }, 2000);
}
processUser1("Krishna", (message) => {
    console.log("Hello " + message);
});
console.log("End");
