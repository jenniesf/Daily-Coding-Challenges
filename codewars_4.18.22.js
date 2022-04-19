     // REMOVING ELEMENTS
function removeEveryOther(arr){
        let newArr = []
        for (let i = 0; i < arr.length; i +=2) {
                newArr.push( arr[i] )
        } 
        return newArr
}
console.log(removeEveryOther ( ["4","i","k","9","m","9","d","d","t","c","9","k","r","5","p","z","1","t","z","o","q"] ) )
