
        // Char code calculation

function calc(x){
        // turn each char into its ASC II char
        let charCode = []
        for( let i = 0 ; i < x.length ; i++) {
                charCode.push( x.charCodeAt(i) )
        }
        // join chars together & determine sum by adding each digit together
        let total1 = charCode.join('').split('')
        total1 = total1.reduce( (acc,c) => Number(acc) + Number(c), 0)
        // replace 7s with 1s
        let total2 = charCode.join('').split('').map( x =>  x == 7 ? '1' : x )
        total2 = total2.reduce( (acc,c) => Number(acc) + Number(c), 0)
        // find difference
        return total1 - total2
}
console.log( calc('abcdef') )