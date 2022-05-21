        // FIND THE MIDDLE ELEMENT
function gimme (triplet) {
        let sorted = triplet.slice(0).sort( (a,b) => a-b)   
        return triplet.indexOf( sorted[1] )
}
