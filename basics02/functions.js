function calculateCartPrice(...num1){ //here ...num1 is called spread and rest but it depend on usecase how we use
    return num1;
}
// console.log(calculateCartPrice(200,400,500, 600000))

// const user = {
//     userName: "Rogg",
//     price: "100000000000000000"
// }
function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`)
}

// handleObject(user);
handleObject({ // in this way we can create user name at the time calling the function
    userName: "samm",
    price: 399
})

const myNewArray = [200,400,500,600]

function returnSecondvalue(getArray) {
    return getArray[0]
}

console.log(returnSecondvalue(myNewArray))
