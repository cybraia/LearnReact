//async await
function makePasta(sauce){
    return new Promise((resolve, reject) => {
        console.log(`Making ${sauce} sauce pasta`)
        if(sauce === 'red'){
            resolve(`${sauce} pasta`);
        }
        else{
            reject("We make only red pasta")
        }
    })
}

function processPasta(response){
    return new Promise((resolve, reject) => {
        console.log(`Processing red sauce pasta`)
        resolve(`Extra topping + ${response}`)
    }) 
}

async function doPasta(){
    try{
        const response = await makePasta("red");
        console.log("Response recieved");
        const processPastaa = await processPasta(response);
        console.log(processPastaa);
    }
    catch(err){
        console.log(err);
    }
    
}
doPasta();