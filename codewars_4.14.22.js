   // COUNT BY X
function countBy( x, n) {
        let z = []
        for (let i = 1; i <= n ; i++) {
                z.push( x  * i )   
        }
        return z
      }  
console.log( countBy( 2,5 )  ) // return [1,2,3,4,5,6,7,8,9,10]