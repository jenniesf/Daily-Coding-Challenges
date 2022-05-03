        // ARROW STYLE FUNCTIONS
        var ArrowFunc = function(arr) { 
                return arr.map( x => String.fromCharCode(x)   ).join(''); 
        }
        console.log( ArrowFunc( [70,85,83,32,82,79,72,32,68,65,72] ) )