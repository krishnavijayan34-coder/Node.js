import crypto from "crypto";

//Async version
const Max_Calls =3;

const start = Date.now();
for (let i=0; i <Max_Calls; i++) {
    crypto.pbkdf2("password","salt",100000,512,"sha512",()=> {
        console.log(`Hash: ${i + 1}`,Date.now() - start);
    });
}


//sync version
// const start =Date.now();

// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");


// console.log("Hash: ", Date.now() - start);