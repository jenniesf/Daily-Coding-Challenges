        // ARUGMENTS TO BINARY ADDITON
        function arr2bin(arr){
          let onlyNums = arr.filter(e => typeof e === 'number')
          let sum = onlyNums.reduce( (acc,c) => acc + c,0 )
          return sum.toString(2)
  }
  console.log( arr2bin( [true, 'asdf',false,'x', 1,2]  ) )