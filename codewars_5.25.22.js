        // SUBSTRING FUN

function nthChar(words){
        let str = ''
        for ( let i = 0 ; i < words.length ;i++) {
                str +=  words[i][i] 
        }     
        return str
}
        //OR
        
function nthChar(words){
        let str = ''
        words.forEach( (x,i) => str += x[i])
        return str
}