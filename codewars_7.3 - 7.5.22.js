        //Smoking Timmy
function startSmoking(bars,boxes){
        let bar = 10 * 18  // one bar is 10 boxes * 18 cigs
        let box = 18       // on box is 18 cigs

        let beginCigs = bars * bar + boxes * box 
        let totalcigs = beginCigs

        // while begin point is greater than 1
        while ( beginCigs > 1 ) {
                totalcigs += beginCigs/5
                beginCigs = beginCigs/5
        }
       
        return Math.floor(totalcigs)
}
console.log( startSmoking(   1,0  ) )




        //Beginner Series #3 Sum of Numbers
function getSum( a,b ) {

        // formula to find sum between two integers
        let n = Math.max( a, b) - Math.min( a,b) + 1 
        let sum = n * ( a + b )/2  
        return sum
}
console.log( getSum(  5 , 1) )  




        //Diving Scores
function scoreOfDive(scores, tariff) {
        // sort the scores from lowest to highest
        scores.sort( (a,b) => a - b)
        // discard first two and last two and 
        // sum the remaining three scores * tariff
        let totScore = (scores[2] + scores[3] + scores[4]) * tariff 
        // return score - two dec places and a string
        return totScore.toFixed(2)
}
console.log( scoreOfDive([7, 7.5, 8, 7.5, 6, 7, 7], 3) )