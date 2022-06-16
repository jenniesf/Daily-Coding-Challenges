//Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages

var list1 = [
      { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
      { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
      { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
      { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
]

function countLanguages(list) {
      let lang = {}
      for (let i = 0 ; i < list.length ;i++) {
              if( lang[list[i].language] ) {
                      lang[list[i].language]++
              } else {
                      lang[list[i].language] = 1
              }
      }
      return lang
}
console.log( countLanguages(list1) )