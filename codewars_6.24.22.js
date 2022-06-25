

//Extra Perfect Numbers (Special Numbers Series #7)
function extraPerfect(n){
        let perfect = []
        for ( let i = 1 ; i <= n ; i++) {
                if ( i % 2 == 1) {
                        perfect.push(i)
                } 
        }
        return perfect
}

console.log( extraPerfect(3) )