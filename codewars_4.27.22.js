        // CATEGORIZE NEW MEMBER

function openOrSenior(data){
        let output = []
        data.forEach(  (e) =>  e[0] >= 55 && e[1] > 7 ?  output.push('Senior') : output.push('Open') )
        return output
}

console.log(  openOrSenior( [ [45, 12], [55,21], [19, -2], [104, 20] ] ) )