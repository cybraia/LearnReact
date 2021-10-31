const me = {
    firstname: "Rish",
    lastname: "Kumar",
    age: 18,
    fullname: function() {
       console.log(this.firstname + " " + this.lastname);
    }
}

console.log(me);
me.fullname(); //Rish Kumar

const myArray = Object.values(me);
console.log(myArray); // [ 'Rish', 'Kumar', 18, [Function: fullname] ]

let myString = JSON.stringify(me); // '{"firstname":"Rish","lastname":"Kumar","age":18}'
// stringify won't work on functions

//constructor function
//name constructor functions with an upper-case first letter
function Person(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}

//arrow functions
// const hello = () => {
//     console.log("Waddup");
// }
// hello();

const hello = () => "hellooo";
console.log(hello());