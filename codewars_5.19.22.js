        // POSSBILITIES ARRAY

function isAllPossibilities(x){
        return x.length > 0 ?   x.every(( element,i) => x.includes(i))   : false;
}