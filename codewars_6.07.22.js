// Minimum Steps (Array Series #6)

function minimumSteps(numbers, value){
    numbers.sort( (a,b) => a-b)
    let counter = 0
    let sum = 0

    for (let i = 0 ; i< numbers.length ; i++) {
        
            if(  sum < value ) {
                    sum = sum + numbers[i]
                    counter++
            }
    }
    return counter-1
}