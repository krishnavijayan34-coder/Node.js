import fs from "fs";
import readline from "readline";

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter your name:",(name)=>{

    r1.question("Enter your age:",(age)=>{

        r1.question("Enter your place:",(place)=>{
            const data = `Name:${name}\nAge: ${age}\nPlace:${place}`;
            fs.writeFile("user.txt",data,(err) => {
                if(err) {
                    console.log("Error wrriting file ");
                    return;
                }
                console.log("User details saved successfully");
                r1.close();
            });
      });
    });
});