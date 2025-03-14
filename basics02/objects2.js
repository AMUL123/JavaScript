//const tinderUser = new Object() //Singleton object

const tinderUser = {} //non-singleton object


tinderUser.id= "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname: {
            firstName: "Amul",
            lastName: "Kumar"
        }
    }
}
// console.log(regularUser.fullName.userfullname.firstName)


//merginf two objects in single objects
const obj1= {
    1: "a",
    2: "b"
}
const obj2= {
    3: "c",
    4: "d"
}
// const obj3 = Object.assign({},obj1,obj2)//{} this use for more that two objects because {} is behave like target other objects is like a source.
// console.log(obj3);

const obj3 ={ ...obj1,...obj2}//spread method to combine objects
// console.log(obj3)
const user= [
    {
        id: 1,
        email: "king@gmail.com",
    },
     {
        id: 1,
        email: "king@gmail.com",
    },
     {
        id: 1,
        email: "king@gmail.com",
    },
     {
        id: 1,
        email: "king@gmail.com",
    }
]
user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));