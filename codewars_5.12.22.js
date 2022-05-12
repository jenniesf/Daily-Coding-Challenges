        // DONT GIVE ME FIVE
function dontGiveMeFive(start, end) {
        let arr = []
        for ( i = start ; i <= end ; i++) {
                if(   i.toString().includes('5') == true   ) { 
                        arr.push('yes')
                }
        }
        return Math.abs( end - start + 1 - arr.length)
}
