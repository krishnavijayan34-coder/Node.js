import https from "https";

 const Max_calls=8;

 const start =Date.now();

 for (let i=0; i <Max_calls; i++) {
    https.request("https://www.google.com",
        (res) => {
            res.on("data",() => {});
            res.on("end",()=> {
                console.log(`Request ${i + 1}:`,Date.now() - start);
            });
        }
    ).end();
 }
    
 
