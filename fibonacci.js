const msgFib = 'How many digits of the Fibonacci squence?';
const msgFibError = 'sorry, that isnt a valid number. How many digits of the Fibonacci squence?';
let errorFib = false;

const searchFibHTML = document.getElementById( 'fib-search' );
const answerFibHTML = document.getElementById( 'fib-answer' );

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
    if( errorFib ) {msg = msgFibError;}
    let input = prompt( msg );

    if ( !input ) {
        errorFib = false;
        return;
    };

    if ( parseInt( input ).toString() == input ) {
        input = parseInt( input );
        // CLAMP TO POSITIVE
        input = Math.max( 0, input );
        error = false;
        searchFibHTML.textContent = input;

        answerFibHTML.textContent = fibRec( input, 0, 1 );
        return;
    };
    errorFib = true;
    getFib();
};