        //ONES - FIND MAX CONSECTIVE ONES

function consecutiveOnes(nums) {
        let sum = 0
        let counter = 0
        
        for ( i = 0 ; i < nums.length ; i++){
            
          sum = nums[i] * ( sum + 1 )
          counter = Math.max( sum, counter)
          
        } 
        return counter
}