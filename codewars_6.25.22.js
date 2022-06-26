// SORTED? Yes? no? how?   
function isSortedAndHow(array) {

        let joined = array.join('')
        let asc = array.sort( (a,b) => a - b).join('')
        let dsc = array.sort( (a,b) => b - a).join('')

        if ( joined === asc ) {
                return "yes, ascending" 
        } else if(  joined === dsc ) {
                return "yes, descending"
        } else {
                return no
        }

}   
console.log( isSortedAndHow(    [0, 100]    ) )