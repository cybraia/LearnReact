//generators
function* simpleGenerator() {
    yield 1;
    yield 2;
}

const generator = simpleGenerator();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next()); //{ value: undefined, done: true } 
//it is true because there is no more values to yield

function* infiniteGenerator() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

function* gen(array){
    for(let i=0; i<array.length; i++){
        yield array[i];
    }
}

const genArray = gen([1,2,3,4,5]);
console.log(genArray.next());
console.log(genArray.next());
console.log(genArray.next());
console.log(genArray.next()); 
console.log(genArray.return(10)); //{ value: 10, done: true }
console.log(genArray.next()); //{ value: undefined, done: true }

//AJAX - Asynchronous javascript and xml
//sync code
function someFunc(){
    console.log("sync");
}

console.log("start");
someFunc();
console.log("end");

//async code
console.log("starting async");
setTimeout(() => {
    console.log("waiting");
},5000);

console.log("end async");