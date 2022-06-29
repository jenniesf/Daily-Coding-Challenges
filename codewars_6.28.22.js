        // Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?

var list1 = [
{ firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
{ firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
{ firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];        

function isRubyComing(list) {  
        let exist = list.find( x => x.language == 'Ruby')
        if(exist) {
                return true
        } else {
                return false
        }   
}

        //OR

function isRubyComing(list) {  
        let exist = []
        for ( let i = 0 ; i < list.length; i++) {
                if ( list[i].language == 'Ruby' ) {
                        exist.push( list[i])
                }

        }
        console.log( exist)
        if ( exist.length > 0 ) {
                return true
        } else {
                return false
        }   
}
console.log( isRubyComing(list1) )

