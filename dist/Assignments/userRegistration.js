"use strict";
function validateEmail(email, callback) {
    setTimeout(() => {
        console.log("validating Email..");
        const isValid = email.includes("@");
        callback(isValid);
    }, 1000);
}
function saveUser(email, callback) {
    setTimeout(() => {
        console.log("Saving user...");
        callback();
    }, 2000);
}
function sendWelcomeMail(email, callback) {
    setTimeout(() => {
        console.log(`welcome mail sent to ${email}`);
        callback();
    }, 1000);
}
function registerUser(email) {
    validateEmail(email, (isValid) => {
        if (!isValid) {
            console.log("Invalid Email");
            return;
        }
        saveUser(email, () => {
            sendWelcomeMail(email, () => {
                console.log("User Registration Completed");
            });
        });
    });
}
registerUser("krishna@gmail.com");
