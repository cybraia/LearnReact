const me = ["Krishna","Mehta",18]; //can have any datatype

function myFunction() {
  console.log("hello");
}

const myCars = ["BMW", "Audi"];

const myArray = [];
myArray[0] = Date.now; //object in an array
myArray[1] = myFunction; //function in an array
myArray[2] = myCars; //array in an array

console.log(myArray); //giving wrong output why??

//difference between array and object
//array is a list of values - numbered index
//object is a list of key value pairs - named index

const num = [40]; //array with one element

const numbers = new Array(40); //array with 40 empty elements

typeof(num); //object
Array.isArray(num); //true

num instanceof Array; //true

//pop returns the last element of an array
//push returns the new length of an array
//shift returns the first element of an array - removes the first element
//unshift returns the new length of an array - adds an element to the beginning
//splice returns the new array - (start, deleteCount, item1, item2, ...)
//concat doesn't change the original array - takes any number of arrays as arguments
//slice returns a new array - (start, end)\

//sort function works only on strings
//for numbers:
const points = [10,3,15,20,5];
//points.sort(); //sorts in ascending order //[10,15,20,3,5]
points.sort((a,b) => a-b); //ascending order
console.log(points);

//The Fisher Yates Method - for random sort
function myFunction() {
    for (let i = points.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * i)
      let k = points[i]
      points[i] = points[j]
      points[j] = k
    }
} 

//only var keyword allows hoisting, let and const doesn't

//A function can be called before declaring it
myFunction();       // Hello
function myFunction() {
  console.log("Hello");
}

//myFunct();           //error : myFunction is not defined
let myFunct = function() {
  console.log("Hello");
}

//spread operator
let myArr = ["I", "am","learning","JS"];
console.log(...myArr); //I am learning JS

let arr1 = [1,2,3];
let arr2 = arr1;
arr1.push(4);
console.log(arr2); //1,2,3,4 - arr2 also gets updated

//by using spread operator
let arry1 = [1,2,3];
let arry2 = [...arr1];
arry1.push(4);
console.log(arry2); //1,2,3 - arr2 doesn't get updated

//with objects
let obj1 = {name: "Krishna"};
let obj2 = {lastname: "Mehta"};

let obj3 = {...obj1, ...obj2};
console.log(obj3); //{name: "Krishna", lastname: "Mehta"}

//rest parameter
//when spread operator is used as parameter - rest parameter
let func = function(...args) {  //args is an array
  console.log(args);
}
func(3); //3
func(4,5,6,7); //4,5,6,7

//deconstructing syntax
//let { property1: variable1, property2: variable2 } = object;

let obj = {name: "Krishna", age: 18};
let {name, age} = obj;
console.log(name); //Krishna
console.log(age); //18

let person = {
    firstName: 'John',
    lastName: 'Doe',
    currentAge: 28
};

let { firstName, lastName, middleName = '', currentAge: agee = 18 } = person;

console.log(middleName); // ''
console.log(agee); // 28 //here it doesn't change to 18

let display = ({firstName,lastName}) => console.log(`${firstName} ${lastName}`)
display(person); //John Doe

//callback function
function wassup(name){
    alert('wassup' + name);
}

function processInput(callback){
    var name = prompt('Enter your name');
    callback(name);
}
processInput(wassup);

let numbers = [1,2,3,4,5,6,7,8,9,10];
let oddNumbers = numbers.filter(number => number % 2);
console.log(oddNumbers); //1,3,5,7,9