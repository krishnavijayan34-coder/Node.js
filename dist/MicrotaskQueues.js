"use strict";
//experiment 3
process.nextTick(() => console.log("this is process.nextTick 1"));
process.nextTick(() => {
    console.log("this is process.nextTick 2");
    process.nextTick(() => {
        console.log("this is the inner next tick inside next tick");
    });
});
process.nextTick(() => console.log("this is process.nextTick 3"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
Promise.resolve().then(() => {
    console.log("this is Promise.resolve 2");
    process.nextTick(() => {
        console.log("this is the inner next tick inside Promise then block");
    });
});
Promise.resolve().then(() => console.log("this is Promise.resolve 3"));
//experiment 2
// Promise.resolve().then(()=>console.log("this is promise.resolve 1"));
// process.nextTick(()=> console.log("this is process.nexttick 1"));
//experiment 1
// console.log("console.log 1");
// process.nextTick(()=> console.log("this is process.next 1"));
// console.log("console.log 2");
