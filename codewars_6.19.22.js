           //Testing 1-2-3
var number = function(array){
        return array.map( (x,i) => x = `${Number(i+1)}: ${x}`  )
}

console.log( number( ["a", "b", "c"] ) )
