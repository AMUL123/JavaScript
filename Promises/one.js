new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
        
    },1000)
}).then(function(){
    console.log("Async 2 resolve");
})

const PromiseThree = new Promise(function(resolve,reject){
   setTimeout(function(){
    resolve({username: "chai", email:"chai@example.com"})
   },1000) 
})

PromiseThree.then(function(user){
console.log(user);
})

const PromiseFour =