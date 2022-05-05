        // HOLIDAY VI- SHARK PONTOON
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
        if (dolphin) {
                sharkSpeed = sharkSpeed / 2
        }
        let meSeconds = pontoonDistance / youSpeed

        let sharkSeconds = sharkDistance / sharkSpeed

        return meSeconds < sharkSeconds ? "Alive!" : "Shark Bait!"
}
console.log( shark(   7, 55, 4, 16, true   ) )  //meters per second 