// object litral or basic object

/*let mybike = {
    name: "cd 70",
    model: 2020,
    price: 40000,
    condition: 9,
    distance: "26000 KM"
}
console.log(mybike["model"]);
console.log(mybike.price);
Object.freeze(mybike); // freezing the object not allow you to make any changes in the object
mybike.distance= "15000 KM" //   This will not change the distance because the object is frozen
console.log(mybike.distance); // The output will still be "26000 KM

// singleton or constructor object.
interface instagramUser{
    id:string,
    name:string,
    isLoggedIn: boolean
}

const instagram_user:instagramUser= {} as instagramUser;
instagram_user.id = "abc123",
instagram_user.name= "ponting",
instagram_user.isLoggedIn= false
console.log(instagram_user.isLoggedIn);

// Nested Objects

/*interface product1 { 
    name:string,
    productfullname : {fullname:string},
    id:number,
    price:string,
    category:string,
    company:string
}
interface product2{
    name: string,
    productfullname:{fullname:string},
    id:number,
    price:string,
    category:string,
    company:string
}

let product_catalog:{ [key: string]: product1 } = {
    prod1: {
        name: "Headphone",
        productfullname:{
            fullname: "Audionic Beast Headphone 100"
        },
        id: 12345,
        price: "2000 Rs",
        category: "Wireless Headphone",
        company: "Audionic"
    },  
    prod2 : {
        name: "Garmin D2",
        productfullname:{
            fullname:"D2™ Air GPS Smartwatch For Aviators"
        },
        id: 678910,
        price: "250000 Rs",
        category: "Adventure Watch",
        company:"garmin"
    }
}
console.log(product_catalog.prod1);

// Type Alias In Object
type Student ={
    name: string,
    batch: string,
    address: string,
    rollno: number,
    phoneNo: number,
};

const student:Student={
    name: "taha",
    batch: "thursday",
    address: "147 Block C Karachi",
    rollno: 207261,
    phoneNo: 1234-233399
};
console.log(student.name);

// Combinig Of Object
const first_object = {
    1: 'a',
    2: 'b'
};
const second_object = {
    3: 'c',
    4: 'd'
};
const third_object = {...first_object,...second_object};
console.log(third_object);*/

// Fresh Object Literals
interface randomUser {
  id: number;
  name: string;
  lastlogin: string;
}
// Case 1
const random_user: randomUser = {
  id: 207261,
  name: "pointnig",
  lastlogin: "yesterday 4:26 pm",
}; // This is a fresh object literal.
// Case 2
//const RandomUser : randomUser ={id:207261, name: "pointnig", lastlogin: "yesterday 4:26 pm" , currentlylogin: true};  // Error: Object literal may only specify known properties, and 'currentlylogin' does not exist in type 'randomUser'
// Case 3
//const RandomUser : randomUser = {id:12345, name:"Adam", lastloggin:"yesterday 4:26 pm"}; // Error: Property 'lastloggin' does not exist on type 'Person'. Did you mean 'lastlogin'?
console.log(random_user.lastlogin);

// Stale Object Literals
interface Person {
    name:string,
    age:number
}
// Case 1
const personExtraInfo={name:"Musab", age:19, gender:"male" };  // This is a fresh object literal but will become stale.
const person2:Person=personExtraInfo; // No error, because 'personExtra' is now a stale object literal
console.log(person2.age);
// Case 2 
function greeting(person:Person){
    console.log(`Hello , ${person.name}`);
}
let anotherperson = {name:"David", age:26 , occupation:"Software engineer"}; // Fresh object literal
greeting(anotherperson); // No error, 'anotherPerson' is a stale object literal