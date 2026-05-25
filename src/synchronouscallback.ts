function processUser(
    name:string,callback:(message:string)=>void
): void {
    console.log("Processing user ...");
    callback(name);
}

processUser("Krishna",(message:string):void=>{
    console.log("Hello " + message);
});
console.log("End");