let x = "krishna" + 18; //makes 18 into string and concatenates
console.log(x) //krishna18

//JavaScript evaluates expressions from left to right

let y = x + 2 
console.log(y) //krishna182
y = 2 + 18 + "krishna"
console.log(y) //20krishna
y = "krishna" + 18 + 2
console.log(y) //krishna182

//same variable can be used to hold different data types

// strings can have double/single quotes
// You can use quotes inside a string, as long as they don't match the quotes surrounding the string

let exp1 = "It's alright"; 

//array
const cars = ["Audi", "Volvo", "BMW"];

//objects
const me = {firstname: "Krishna", lastname: "Mehta", age:18}

var a = 3 | 4
console.log(a)

Number("3.14")    // returns 3.14
Number(" ")       // returns 0
Number("99 88")   // returns NaN

let b = "5"
parseInt(b)
console.log(b)  // it giving 5 without parseInt also, what's the use of parseInt?

let c = "Krishna"; //type is string
let d = + c; //type is number

//convert from number to string
String(100 + 23) 
//(100).toString 

5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"

const todos = [
    {
        id: 1,
        text: "Drink water",
        isCompleted: true,
    },
    {
        id: 1,
        text: "Learn JS",
        isCompleted: true,
    },
    {
        id: 1,
        text: "Good Sleep",
        isCompleted: false,
    }
];

for(let todo of todos) //let i=0; i<=todos.length; i++
{
    console.log(todo.text);
}

//to convert to JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

console.log(`hello ${c}`)

//forEach
todos.forEach(function(todo){
    console.log(todo.text);
})

//map
const todoText = todos.map(function(todo){
    return todo.text;
})

console.log(todoText)

//filter
const todoTex = todos.filter(function(todo){
    return todo.isCompleted == true;
}).map(function(todo){
    return todo.text;
})
console.log(todoText)

// function multi(a=1, b=1){
//     return a*b;
// }

// console.log(multi(2,3))

const multi = (a = 1, b=1) => a*b
console.log(multi(2,3))

todos.forEach((todo) => console.log(todo))