//looping

//for - statement 1 and 2 optional
//when you don't provide statement 2, add 'break'
// let text;
// for(let i=0, text=" "; i<5; i++)
// {
//     text += i + "<br>" ;
// }
// console.log(text)
  //error in above code

let num = [1,2,3,4,5]

let text = "";

num.forEach(func);
function func(value,index,array){
    text += value + " "
}

console.log(text)

// Using an object literal
const me = {firstName: "krishna", lastName: "Mehta", age:19};

//Using new keyword
const me = new Object();
me.firstName = "Krishna";
me.lastName = "Mehta";
me.age = 18;

const x = me;  //not a copy

x.age = 19; //will change x.age and me.age

let txt;
for (let i in me){
  txt += me[i];
}

me.year = 2; //to add a property    why error??

delete me.age; //to delete a property  or delete me["age"];

