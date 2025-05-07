// Write a function called 'all' which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function

// Sample:

// var allAreLessThanSeven = all([1,2,9], function(num){
// 	return num < 7;
// });

// console.log(allAreLessThanSeven); // false


function all( array, callback ) {

    if ( array.length < 1 ) { return true };

    if ( callback( array[ 0 ] ) ) {
        // true
        array.shift();
        return all( array, callback );
    };

    return false;
};


var allAreLessThanSeven = all([1,1,2,3,1,4,5,6], function(num){
	return num < 7;
});

console.log(allAreLessThanSeven); // true