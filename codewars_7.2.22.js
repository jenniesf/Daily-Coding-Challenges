//Find the stray number

function stray(numbers) {
        // sort numbers
        numbers.sort( (a,b) => a-b)
        // if first and second numbers are the same, return last otherwise return first
        return numbers[0] == numbers [1] ? numbers[numbers.length-1] : numbers[0]
}

console.log( stray([1, 1, 2, 1, 1]) )
