function someFunction(){
    console.log("some function is called");
}

function receivesAFunction(someFunction){
    console.log("receives a function is called");
    someFunction();
}

receivesAFunction();

function returnsANamedFunction(){
    return function namedFunction(){
        console.log("named function is called");
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("anonymous function is called");
    }
}