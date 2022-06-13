
// TOTAL AMOUNT OF POINTS
function points(games) {
        return games.reduce( (acc, c , i) => acc + (c[0] > c[2] ? 3 :  c[0] == c[2] ? 1 :  0) , 0 ) 
}

console.log( points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']) )