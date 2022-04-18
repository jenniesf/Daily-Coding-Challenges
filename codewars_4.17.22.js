        //SUM OF DIFFERENCES IN ARRAY
        function sumOfDifferences(arr) {
                arr.sort( (a,b) => b-a )
                 let sum = []
                 for ( i = 0; i < arr.length-1; i++) {
                     sum.push(arr[i] - arr[i+1])
                 }
                 return sum.reduce( (acc,c) => acc + c,0  )
        }
        console.log( sumOfDifferences([2, 1, 10]) )  // 10,2,1