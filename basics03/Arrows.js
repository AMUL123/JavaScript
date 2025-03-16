const user = {
    username: "samm",
    price: 9999,
    
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); //here this. is used for current context 
    }
}

// user.welcomeMessage()
// user.username="rock"
// user.welcomeMessage()
// this. can't be used inside the function it will be used in objects

const chai = ()=> {
    let username="samm"
    console.log(this.username)
}
// chai()

// const addTwo =(num1, num2)=> {
//     return num1+num2;  //explicit method
// }
//const addTwo =(num1, num2)=> num1+num2;  //this is called implicit method
//const addTwo =(num1, num2)=> (num1+num2); // if we are using {} then we have to write return inside {}.
    
const name =(num1, num2)=> ({username: "sam"});

// console.log(name(3,4))

