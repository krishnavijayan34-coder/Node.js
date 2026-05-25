function validateEmail(
    email:string,
    callback:(isValid:boolean)=>void
):void {
    setTimeout(():void => {
        console.log("validating Email..");
        const isValid=email.includes("@");
        callback(isValid);
    },1000);
}


function saveUser(
    email:string,
    callback:()=>void
): void {
    setTimeout(():void =>{
        console.log("Saving user...");
        callback();
    },2000);
}



function sendWelcomeMail(
    email:string,
    callback:()=> void
): void {
    setTimeout((): void=> {
        console.log(`welcome mail sent to ${email}`);
        callback();
    },1000);
}

function registerUser(email:string): void {
    validateEmail(email,(isValid:boolean):void => {
        if (!isValid) {
            console.log("Invalid Email");
            return;
        }

        saveUser(email,():void => {
            sendWelcomeMail(email,(): void=> {
                console.log("User Registration Completed");
            });
        });
    });
}
registerUser ("krishna@gmail.com");

