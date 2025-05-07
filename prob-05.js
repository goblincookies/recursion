// Write a function called 'productOfArray' which takes in an array of numbers and returns the product of them all

// Sample:

// var six = productOfArray([1,2,3]) // 6
// var sixty = productOfArray([1,2,3,10]) // 60


function productOfArray( array ) {
    if ( array.length < 2 ) { return array[ 0 ] };

    let n = array[ 0 ];
    array.shift();
    return ( n * productOfArray( array ) );
};


let a = [ 1,2,3 ];
let b = [ 1,2,3,10 ];
let c = [ 10 ];
let d = [ 0,5,5 ];



console.log( productOfArray( a ) );
console.log( productOfArray( b ) );
console.log( productOfArray( c ) );
console.log( productOfArray( b ) );
