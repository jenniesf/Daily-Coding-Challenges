//Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?

var list1 = [
        { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
        { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
        { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
]

function isSameLanguage(list) {
       return list.every( x => x.language === list[0].language )
}
console.log( isSameLanguage(list1))