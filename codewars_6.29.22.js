//Double Every Other
function doubleEveryOther(a) {
     
        // return in a new array
        // let newa = []
        // for ( let i = 0 ; i< a.length ; i++) {       
        //         if ( i % 2 == 0 ) {
        //                 newa.push( a[i])
        //         } else {
        //                 newa.push(  a[i] * 2)
        //         }
        // }
        // return newa

        // refactor
        return a.map( (e,i) => i % 2 == 0 ? e : e*2   )
}

console.log( doubleEveryOther([1,2,3,4]) )