        //Even numbers in an array
function evenNumbers(array, number) {   
        let newArr = array.filter( x => x % 2 === 0  )
        return newArr.slice( newArr.length - number )
}
console.log( evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) )