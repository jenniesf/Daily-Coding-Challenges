        // SWAP VALUES
var arr = [1,2] 
function swapValues(arr) {
        var args = arr
        var temp = args[0];
        args[0] = args[1];
        args[1] = temp;
        return arr
}
console.log( swapValues(arr))