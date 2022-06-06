    //NBA full 48 minutes average
function pointsPer48(ppg, mpg) {      
      ppg == 0 && mpg === 0 ? x = 0 : x = (48/mpg * ppg).toFixed(1) 
      return Number(x)
}