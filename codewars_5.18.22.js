// FIND ALL PAIRS
function duplicates(arr){
        var count = 0;
        arr.sort();
        console.log(arr)
        for (var i = 0; i < arr.length;) {
                if (arr[i] === arr[i + 1]) {
                        count++;
                        i += 2;
                } else {
                        i++;
                }
        }
        return count  
}
console.log( duplicates( [1, 2, 2, 20, 6, 20, 2, 6, 2] ) )