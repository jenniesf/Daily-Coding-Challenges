// NO LOOPS 2 - YOU ONLY NEED ONE
function check(a,x){

        if (   a.indexOf(x) != -1 ) {
                return true
        } else {
                return false
        }
}
console.log ( check(   [66, 101]   , 66 )  )