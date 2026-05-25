"use strict";
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}
function message() {
    console.log("Welcome to Node.js");
}
greet("Krishna", message);
