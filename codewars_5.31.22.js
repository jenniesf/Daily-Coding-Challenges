        // NUMBER PAIRS

let a = [13, 64, 15, 17, 88]
let b = [23, 14, 53, 17, 80]    

function getLargerNumbers(a, b) {
        // define a new Array
        let newArr = []
        // compare each integer at each index to determine largest amount
        for ( let i = 0 ; i < a.length; i++) {
                if ( a[i] > b[i]) {
                        newArr.push( a[i])
                } else {
                        newArr.push( b[i])
                }
        }
        // return an Array with the largest amt 
        return newArr
}