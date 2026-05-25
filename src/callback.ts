function greet(name:string,callback:()=> void) : void {
    console.log("Hello " + name);
    
    callback();
}

function message():void {
    console.log("Welcome to Node.js");
}
greet("Krishna",message);