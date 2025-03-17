// if
const isUserloggedIn = true;
const temperature = 41;
// if(true /*condition*/){

// }if(false){

// }
// if(temperature < 50){
//     console.log("less than 50");
// }else{
//     console.log("temperature is greater than 50")
// }


//<,>,<=,>=,==,!=,=== data type same,

// const score = 200;
// if(score > 100){
//     const power ="fly";
//     console.log(`user power: ${power}`)
// }

// const balance = 1000;

// if(balance > 500) console.log("test"); //implicit scope

// if(balance < 500){
//    console.log("less than 500");
// }else if (balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
// }

const userloggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromMail = true;

 
if(userloggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromMail) {
    console.log("User logged in");
}
