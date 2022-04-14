        // BEGINNER - REDUCE BUT GROW
function grow(x){
       let total = 0
       x.reduce ( (acc,c) => total = c * acc  , 1  )
       return total
}
console.log( grow( [ 2, 2, 2, 2, 2, 2 ] ) ) 

                // OR
// let grow = x => x.reduce ( (acc,c) => c * acc )
//  console.log( grow( [ 2, 2, 2, 2, 2, 2 ] ) ) 