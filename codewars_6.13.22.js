
//Coding Meetup #14 - Higher-Order Functions Series - Order the food

var list1 = [
        { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
          meal: 'vegetarian' },
        { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
          meal: 'standard' },
        { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
          meal: 'vegan' },
        { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
          meal: 'vegetarian' },
        ]

function orderFood(list) {
        // set variable to return
        let answer = {}
        // iterate through array of objects
        for (let i = 0; i < list.length ; i++) {   
                // if answer[meal type property] exist, add one.
                // if does not exist, create property value with key value of 1   
                if ( answer[list[i].meal] )    {
                        answer[list[i].meal]++  
                }     else {
                        answer[list[i].meal] = 1
                }           
        }
        return answer
}
console.log( orderFood(list1 )) // { vegetarian: 2, standard: 1, vegan: 1 }