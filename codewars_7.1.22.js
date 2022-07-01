//Nth power rules them all! 

function modifiedSum(a, n) {
        return a.reduce( (acc, c ) => acc + c ** n , 0) - a.reduce( (acc,c) => acc + c,0 )
}
console.log( modifiedSum([1, 2, 3], 3) )
