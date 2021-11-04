//promises
let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if(a==2){
        resolve("Success");
    }
    else{
        reject("Failed");
    }
})

p.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})

const eat = new Promise((resolve, reject) => {
    resolve("Ate good food");
})

const sleep = new Promise((resolve, reject) => {
    resolve("Slept well");
})

const code = new Promise((resolve, reject) => {
    resolve("Love coding");
})

Promise.all([
    eat,
    sleep,
    code
]).then((messages) => {
    console.log(messages);
})

//Functional programming
var subjects = [
    {name: "AFLL" , feel: "bad"},
    {name: "DDCO", feel: "illogical"},
    {name: "DS", feel: "hard"},
    {name: "WT", feel: "good"},
    {name: "SDS", feel: "shitty"}
]

var isBad = (subject) => {
    return subject.feel === "bad";
}

var badSubs = subjects.filter(isBad);
var otherSubs = subjects.reject(isBad);

//adv reduce??
// import fs from "fs"; //why error??

// var output = fs.readfileSync('data.txt', 'utf8')
// .trim()
// .split('\n')


// console.log('output', output)

//recursion
let categories = [
    {id: 'animals', 'parent': null},
    {id: 'mammals', 'parent': 'animals'},
    {id: 'cats', 'parent': 'mammals'},
    {id: 'dogs', 'parent': 'mammals'},
    {id: 'chihuahua', 'parent': 'dogs'},
    {id: 'labrador', 'parent': 'dogs'},
]

let makeTree = () => {
    let node = {};
    categories.filter(c => c.parent === parent)
    .forEach(c => node[c.id] = makeTree(categories, c.id));
    return node;
}

console.log(
    JSON.stringify(
        makeTree(categories, null)
    , null, 2) 
)
