      // X MARKS THE SPOT

const xMarksTheSpot = (input) => {
        let coords = []
        for (let i = 0; i < input.length; i++) {
                if (input[i].includes("x")) {
                coords.push(  [i, input[i].indexOf("x")]  )
                }
        }
       console.log( coords)
        if (coords.length === 1) {
                return coords[0]
        } else {
                return []
        }  
}
console.log( xMarksTheSpot (  
        [       ['x', 'o'],
        ['o', 'o'] ]
  ) )