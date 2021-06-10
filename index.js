function receivesAFunction(a) {
    return a();
}

receivesAFunction(function() {return 1+1})


function returnsANamedFunction() {
   let hello = () =>  console.log('hello');
   return hello;
}

function returnsAnAnonymousFunction() {
    return function() {return 2+3}
}
