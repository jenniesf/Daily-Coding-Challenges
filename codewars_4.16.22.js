   // SQUARE OR SQUARE ROOT

function squareOrSquareRoot(array) {
        let newArr = array.map( elem => Math.sqrt( elem ) % 1 == 0 ? Math.sqrt( elem ) : elem ** 2 )  
        return newArr
     
}
console.log( squareOrSquareRoot( [ 4, 3, 9, 7, 2, 1 ] ) )