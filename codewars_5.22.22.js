        // LIST OF PRESENTS
function howManyGifts(maxBudget, gifts){

        gifts.sort( (a,b) => a-b)
        let counter = []

        for ( let i = 0 ; i < gifts.length ; i++ ) {
                if ( gifts[i] <= (maxBudget) ) {
                        counter.push( gifts[i] )  //push instead of increaseing counter to view bugs
                        maxBudget -= gifts[i]
                }
        }
        return counter.length
}