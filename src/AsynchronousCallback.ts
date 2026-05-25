function processUser1(
    name:string,callback:(message:string)=>void
): void {
    console.log("Processing user..");
    setTimeout(():void =>{
        callback(name);
    },2000);
}
processUser1("Krishna",(message:string):void=>{
    console.log("Hello " + message);
});
console.log("End");