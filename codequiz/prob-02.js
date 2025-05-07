// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

// Sample:

// console.log(power(2, 4)); // 16
// console.log(power(2, 3)); // 8
// console.log(power(2, 2)); // 4 
// console.log(power(2, 1)); // 2
// console.log(power(2, 0)); // 1


function power( n, e ) {
    if ( e == 0 ) { return 1 };
    return n * power( n, e-1 );
};

for ( let i = 0; i < 5; i++ ) {
    console.log( power( 2, i ) );
};