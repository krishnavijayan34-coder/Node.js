import EventEmitter from "events"

const emitter =new EventEmitter();

//create event listner
emitter.on("greet",(name:string):void=>{
    console.log(`Hello ${name}`);
});

emitter.emit("greet","Krishna");