        // REMOVE THE MINIMUM
function removeSmallest(numbers) {
      // figure out which is the lowest integer
      let lowestInt = Math.min(...numbers)
      //create a copy of the array
      let newArr = numbers.map( x => Number(x))
      //remove lowest integar
      let index = newArr.indexOf( lowestInt)
      newArr.splice( index , 1 )
      //return an array of remaining integers
      return newArr
}