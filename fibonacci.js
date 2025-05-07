const msgFib = 'How many digits of the Fibonacci squence?';
const msgFibError = 'sorry, that isnt a valid number. How many digits of the Fibonacci squence?';
let error = false;

const searchHTML = document.getElementById( 'fib-search' );
const answerHTML = document.getElementById( 'fib-answer' );

document.getElementById( 'fib-start' ).addEventListener( 'click', getFib );

// 1, 2, 3, 4, 5, 6, 7, 8
// 0, 1, 1, 2, 3, 5, 8, 13

function fibRec( lvl, a, b ) {
    if ( lvl < 2 ) { return a }
    let c = a + b
    return [a].concat( fibRec( lvl-1, b, c ) );
};



function getFib( ) {
    let msg = msgFib;
    if( error ) {msg = msgFibError;}
    let input = prompt( msg );

    if ( !input ) {
        error = false;
        return;
    };

    if ( parseInt( input ).toString() == input ) {
        input = parseInt( input );
        // CLAMP TO POSITIVE
        input = Math.max( 0, input );
        error = false;
        searchHTML.textContent = input;

        answerHTML.textContent = fibRec( input, 0, 1 );
        return;
    };
    error = true;
    getFib( 'sorry, that isnt a valid number. How many digits of the Fibonacci squence?' );
};