// LETTER COUNT -

function LetterCount(str) { 
    // code goes here  
    s = str.split(' ')
    let newArr = []
  
    for ( let i = 0; i < s.length ;i++) {
      newArr.push( s[i].split('').sort().join('') )
    }
  
    let counter = []
    for (let i = 0 ; i < newArr.length ; i++) {
      counter[i] = 0
      for ( let j = 0 ; j < newArr[i].length; j++ ) {
          if (  newArr[i][j] == newArr[i][j+1]  ) {
            counter[i]++
          }
      }
    }
  
    let max = Math.max(...counter)
    if (max == 0) return -1
    let index = counter.indexOf(max)
    return s[index]
  }