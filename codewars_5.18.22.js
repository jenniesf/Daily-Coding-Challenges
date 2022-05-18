// FIND ALL PAIRS
function duplicates(arr){
        var count = 0;
        arr.sort();
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
