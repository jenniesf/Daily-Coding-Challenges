        //Minimize Sum Of Array (Array Series #1)
function minSum(arr) {

        let sum = []
        arr.sort( (a,b) => a-b)

        let arrHalf = arr.length/2-1 
        for ( let i = 0 ; i <= arrHalf; i++) {
                sum.push( arr[i] * arr[ arr.length-1-i ]  )
        }
        return sum.reduce( (acc,c) => acc + c,0)
}

console.log(  minSum(  [  12,6,10,26,3,24  ]  )    )  