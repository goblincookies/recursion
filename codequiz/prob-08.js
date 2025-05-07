// Write a function that sums squares of numbers in list that may contain more lists

// Sample:

// var l = [1,2,3]; 
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// l = [[1,2],3]; 
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// l = [[[[[[[[[1]]]]]]]]] 
// console.log(SumSquares(l)); // 1 = 1

// l = [10,[[10],10],[10]] 
// console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400


let a = [1,2,3]             // 1*1 + 2*2 + 3*3 == 1 + 4 + 9 = 14
let b = [[1,2],3]           // 1*1 + 2*2 + 3*3 == 1 + 4 + 9 = 14
let c = [[[[[[[[[1]]]]]]]]] // 1*1 = 1
let d = [10,[[10],10],[10]] // 10*10 + 10*10 + 10*10 + 10*10 = 400



function SumSquares( list ) {
    if ( typeof list != 'object' ) {
        return list * list;
    };

    let i = 0;
    for( const val of list) {
        i += SumSquares( val )
    };
    return i;
};


console.log( SumSquares( a ) );
console.log( SumSquares( b ) );
console.log( SumSquares( c ) );
console.log( SumSquares( d ) );