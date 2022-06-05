                //Change two-dimensional array
function matrix(array) {
for ( let i = 0 ; i < array.length; i++) {
            // if less than 0, turn to 0
            // greater than 0, turn to 1

            if (  array[i][i] < 0  ) {
                  array[i][i] = 0
            } else {
                  array[i][i] = 1
            }    
}
return array
}

console.log ( matrix(  [[-1, 4, -5, -9, 3], 
                  [6, -4, -7, 4, -5], 
                  [3, 5, 4, -9, -1], 
                  [1, 5, -7, -8, -9], 
                  [-3, 2, 1, -5, 6]
            ]) )
