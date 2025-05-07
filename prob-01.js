// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

// Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.

function sumRange( n ) {
    if ( n == 0 ) { return 0; }
    return n + sumRange( n - 1 )
};

let a = sumRange( 3 );
let b = sumRange( 4 );

console.log( a, b );