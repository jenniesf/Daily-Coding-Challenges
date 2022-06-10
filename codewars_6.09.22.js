    // Working with arrays I (and why your code fails in some katas)

function withoutLast(arr) {
        // without use pop()
        let newArr = []
        for (let i = 0; i < arr.length-1; i++) {
                newArr.push(  arr[i]  )
        }
        return newArr
}
console.log(  withoutLast([1, 2, 3, 4, 5 ]) )