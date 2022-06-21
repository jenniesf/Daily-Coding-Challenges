              
   // Coding Meetup #2 - Higher-Order Functions Series - Greet developers

var list1 = [
        { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
        { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
        { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
]
function greetDevelopers(list) {
        list.forEach(  x => {
                x.greeting = `Hi ${x.firstName }, what do you like the most about ${x.language}?` 
        })
        return list
}
console.log(  greetDevelopers(list1)  )