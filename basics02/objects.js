//object literals

const mySym = Symbol("key1")


const JsUser = {
    name : "Amul",
    "full_name":"Priyanshu Kumar",
    [mySym]: "mykey1",
    age: 22,
    location: "Bakhtiyarpur",
    email: "12ka442ka1@gmail.com",
    isLoggedIn: false,
    lastLoginDats:["Monday","Saturday"]
}

console.log(JsUser.email); //but thisis not goood practice
console.log(JsUser["full_name"]); //in this we can acess that full is write in string form 
console.log(JsUser[mySym]);// to access the symbol fron the objects


JsUser.email = "amul@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "amul@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());