        // GRASSHOPPER - ARRAY MEAN
        var findAverage = function (nums) {
                let sum = nums.reduce( (acc, c) => acc + c, 0)
                return sum / nums.length
            }
            
            console.log( findAverage([1, 3, 5, 7]) )