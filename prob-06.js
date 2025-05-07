// Write a function called 'contains' that searches for a value in a nested object. It returns true if the object contains that value.

// Sample:

// var nestedObject = {
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44,
//                         something: 'foo2'
//                     }
//                 }
//             }
//         }
//     }
// }

// let hasIt = contains(nestedObject, 44); // true
// let doesntHaveIt = contains(nestedObject, "foo"); // false


function contains( obj, search ){

    for ( const key in obj ) {

        if( typeof obj[ key ] == 'object' ) {
            return contains( obj[ key ], search );
        };

        if ( obj[ key ] == search ) {
            return true;
        };        
    };

    return false;    

};

function containsAlt( obj, search ) {
    if ( typeof obj !== "object" || obj === null ) {
        return obj === search;
    };

    for ( const val of Object.values( obj ) ) {
        if ( containsAlt( val, search ) ) {
            return true;
        };
    };
    return false;
};


let nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

// let hasIt = contains(nestedObject, 44); // true
// let doesntHaveIt = contains(nestedObject, "foo"); // false

let hasIt = containsAlt(nestedObject, 44); // true
let doesntHaveIt = containsAlt(nestedObject, "foo"); // false


console.log( hasIt );
console.log( doesntHaveIt );
