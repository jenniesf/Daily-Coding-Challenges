        // NARCISSISTIC NUMBERS
        function isNarcissistic(n) {
                let arr =  n.toString().split('')  // convert num into an array of numbers
                let digits = arr.length
                let newArr = []
        
                for ( let i = 0; i < arr.length ; i++) {
                        newArr.push ( arr[i] ** digits )
                }
        
                if ( newArr.reduce( (acc, c) => acc + c, 0)  == n ){
                        return true 
                } else {
                        return false
                }
        }
        console.log( isNarcissistic ( 153 ) )
        // Ex: 153, where n = 3 (number of digits in 153)
        // 13 + 53 + 33 = 153