      // LARIO and MUIGI PIPE PROBLEM

      function pipeFix(numbers){

        let first = numbers[0]
        let last = numbers[numbers.length-1]
 
        let newArr = []
 
         for ( let i = first; i <= last ; i++) {
                 newArr.push(i)
         }
     
         return newArr
 
 }

 console.log ( pipeFix( [1,2,3,5,6,8,9] ) )