//map function
const num = new Map()

num.set('one',1);
num.set('two',2);
num.set('three',3);

num.set('one',11);
let one = num.get('one') 
console.log(one); //11
//num.size() //3 but this is giving error

let text = "";
num.forEach((value,key) => {
    text += `${key} = ${value} \n`
})
console.log(text);

const numb = [1,2,3,4];
let a = numb.map((no) => no**3);
console.log(a)

//filter
words = ['hii', 'helloo','wassup', 'byebye'];
let fil = words.filter((word) => word.length%2==0);
console.log(fil);
//A JavaScript class is not an object.

//constructor

class Person {
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    age(year){
        return year - this.year;
    }
}

let Person1 = new Person('Krishna',2002);
console.log(`Krishna is ${Person1.age(2021)} years old`); //19

//functions
//assigning function to a variable
const add = function(a,b){
    return a+b;
}
console.log(add(1,2)); //3

//callback functions
function adding(a,b,callback){
    console.log(`addition of ${a} and ${b} is`) //first printed
    return callback(a,b);
}

function callback(a,b){
    return a+b;
}

console.log(adding(1,2,callback)); //3

//reduce
const numbers = [1,2,3,4,5];
let sum = numbers.reduce((a,b) => a+b);
console.log(sum); //15


