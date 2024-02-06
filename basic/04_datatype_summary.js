const score = 100
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

console.log(typeof outsideTemp);
console.log(typeof userEmail)

const heros = ["shaktiman" , "naagraj" , "doga"]

let myObj = {
    name : "hitesh",
    age : "22"
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof heros)
// console.log(typeof myObj);
// console.log(typeof myFunction);

//premitive--stack //non-primitive--heap

let myYoutubeName = "hilteshchoudharydotcom"

let anothername = myYoutubeName
anothername = "chaiaurcode"

console.log(myYoutubeName);
console.log(anothername);

let UserOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = UserOne

userTwo.email = "hitesh@google.com"

console.log(UserOne.email);
console.log(userTwo.email);