        // EVEN TIMES LAST
function evenLast(numbers) {

        let sum = 0
        for( let i = 0 ; i<numbers.length ;i+=2) {
                sum += numbers[i]
        }
        return sum * numbers[numbers.length-1] || 0
}
        