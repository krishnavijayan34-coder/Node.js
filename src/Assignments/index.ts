import readline from "readline";
import ChatEmitter from "./chatEmitter";

const chat = new ChatEmitter();

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

chat.on("message",(message:string):void=> {
    console.log(`New Message:${message}`);
    askMessage();

});

function askMessage(): void {
    r1.question("Enter Message: ",(message:string):void => {
        if(message === "exit") {
            console.log("Chat Closed");
            r1.close();
            return;
        }
        chat.sendMessage(message);
    
    });
}
console.log("Chat Application Started");
askMessage();