// ARRAY LEADERS SERIES 3

function arrayLeaders(numbers){
        let leaders = [], sumOfNums = 0

        for ( let i = 0 ; i <= numbers.length-1 ; i++) {   
                let nums =  numbers.slice( i+1 ) 
                sumOfNums = nums.reduce( (acc,c) => acc + c, 0)
          
                if ( numbers[i]   >  sumOfNums    ){
                        leaders.push( numbers[i])
                }
        }
        return leaders
}
