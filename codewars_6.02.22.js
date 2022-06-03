        // SCORING TESTS
function scoreTest(str, right, omit, wrong){
        // set variables
        let correctPoints  = 0
        let incorrextPoints = 0
        let omittedPoints = 0

        // determine points
        str.forEach( element => {           
                element == 0 ?  correctPoints += right : element == 1 ? omittedPoints += omit : incorrextPoints += wrong             
        })

        // return points 
        return correctPoints - incorrextPoints + omittedPoints
}