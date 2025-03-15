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
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

//destuctured 

const course = {
  coursename: "js for yourself",
  price : "what you want to contribute",
  courseInstructor: "OwnSole"
}

//course.courseInstructor

const {courseInstructor: Instructor}=course
// console.log(Instructor);


//objects in json format . we get this from API
// {
//     "name": "ownsole",
//     "coursename": "js for yourselfs",
//     "price":"free"

// }


//array from json format
// [
//   {},
//   {},
//   {}  
// ]

//random user me API
{
    "results": [
    {
    "gender": "male",
    "name": {
    "title": "Mr",
    "first": "Hudson",
    "last": "White"
    },
    "location": {
    "street": {
    "number": 9480,
    "name": "Disputed Rd"
    },
    "city": "Glenwood",
    "state": "Alberta",
    "country": "Canada",
    "postcode": "G6L 9T2",
    "coordinates": {
    "latitude": "-68.4535",
    "longitude": "-58.7387"
    },
    "timezone": {
    "offset": "+4:30",
    "description": "Kabul"
    }
    },
    "email": "hudson.white@example.com",
    "login": {
    "uuid": "6eaf650a-2370-45fd-9a73-5ca8f8741ab5",
    "username": "lazyduck400",
    "password": "mustang",
    "salt": "inEcu01Y",
    "md5": "f01099fbfde8322691a937ed0dd46f29",
    "sha1": "2f3d295693bba217f7ebae530cc624339250d909",
    "sha256": "64e5b6ab5f6304a1a8753e979657d1eb01df51e556390ce7e63e1c558fc4e9d0"
    },
    "dob": {
    "date": "1988-08-09T11:17:16.345Z",
    "age": 36
    },
    "registered": {
    "date": "2015-10-30T21:18:17.375Z",
    "age": 9
    },
    "phone": "Z54 G16-6357",
    "cell": "Q87 H72-8473",
    "id": {
    "name": "SIN",
    "value": "435149026"
    },
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/53.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/53.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/53.jpg"
    },
    "nat": "CA"
    }
    ],
    "info": {
    "seed": "a229da9626ef9892",
    "results": 1,
    "page": 1,
    "version": "1.4"
    }
    }

