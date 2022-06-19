        // Positive to negative binary numbers

function positiveToNegative( b ) {
        let inverted = []
        // invert numbers
        for ( let i = 0 ; i < b.length; i++) {
                b[i] == 0 ? inverted.push(1) : inverted.push(0)
        }
        // convert binary to decimal plus 1
        let dec = parseInt( inverted.join('') , 2 )  + 1
        // convert back to binary and into an array of numbers
        return  ( dec.toString(2).split('') ).map( x => x = Number(x))      
}

console.log( positiveToNegative( [0,0,1,0])  )
