// object litral or basic object
// Case 1
var random_user = {
    id: 207261,
    name: "pointnig",
    lastlogin: "yesterday 4:26 pm",
}; // This is a fresh object literal.
// Case 2
//const RandomUser : randomUser ={id:207261, name: "pointnig", lastlogin: "yesterday 4:26 pm" , currentlylogin: true};  // Error: Object literal may only specify known properties, and 'currentlylogin' does not exist in type 'randomUser'
// Case 3
//const RandomUser : randomUser = {id:12345, name:"Adam", lastloggin:"yesterday 4:26 pm"}; // Error: Property 'lastloggin' does not exist on type 'Person'. Did you mean 'lastlogin'?
console.log(random_user.lastlogin);
// Case 1
var personExtraInfo = { name: "Musab", age: 19, gender: "male" }; // This is a fresh object literal but will become stale.
var person2 = personExtraInfo; // No error, because 'personExtra' is now a stale object literal
console.log(person2.age);
// Case 2 
function greeting(person) {
    console.log("Hello , ".concat(person.name));
}
var anotherperson = { name: "David", age: 26, occupation: "Software engineer" }; // Fresh object literal
greeting(anotherperson); // No error, 'anotherPerson' is a stale object literal
