       // UEFA EURO 2016

function uefaEuro2016(teams, scores){
        if ( scores[0] == scores [1] ) {
                return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
        }
        let winner = []
        if ( scores[0] > scores [1] ) {
               winner.push( teams[0] )
        } else {
                winner.push( teams[1])
        }
        return `At match ${teams[0]} - ${teams[1]}, ${winner} won!`
}
console.log( uefaEuro2016(  ['Portugal', 'Iceland'], [1, 1]  ) ) // "At match Portugal - Iceland, teams played draw.")