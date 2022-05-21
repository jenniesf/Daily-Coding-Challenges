        // INSERT DASHES

function insertDash(num) {
        let adjNum = ''
        let str = num.toString()
        for (let i = 0 ; i < str.length; i++) {
              str[i] % 2 === 1 && str[i+1] % 2 === 1 ?  adjNum += str[i] + '-' : adjNum += str[i]      
        }
        return adjNum
}