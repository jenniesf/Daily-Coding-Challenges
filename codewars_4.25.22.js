        // SIMPLE FUN $193: MOMENT OF TIME IN SPACE
function momentOfTimeInSpace(moment) {
        let past = [ true,false,false]
        let present = [false, true, false]
        let future = [false, false,true]

        let arr = moment.split('')
        let time = 0 
        let space = []

        for ( let i = 0; i < arr.length; i++) {
                if( arr[i] > 0 ) {
                        time = time + Number( arr[i] )
                } else {
                        space.push(arr[i])
                }
        }
                if ( time < space.length ) {
                        return past
                } else if ( time > space.length ) {
                        return future
                } else {
                        return present
                }
}
console.log( momentOfTimeInSpace("01:00 pm") )