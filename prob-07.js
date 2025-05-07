// Given a multi-dimensional integer array, return the total number of integers stored inside this array

// Sample:

// var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7



function totalIntegers( array ) {

    if ( typeof array != 'object' ) {
        if ( parseInt( array ).toString() == array ) return 1;
        return 0;
    };

    let i = 0;
    for( const val of array) {
        i += totalIntegers( val )
    };
    return i;
};


let a = [];         // 0
let b = [1];        // 1
let c = ['a', 3];   // 1
let d = [1,2];      // 2
let e = [[],1]      // 1
let f = [4,[2]]     // 2
let g = [[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]      // 7


console.log( totalIntegers( a ) );
console.log( totalIntegers( b ) );
console.log( totalIntegers( c ) );
console.log( totalIntegers( d ) );
console.log( totalIntegers( e ) );
console.log( totalIntegers( f ) );
console.log( totalIntegers( g ) );
