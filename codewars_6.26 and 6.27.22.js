

    // GAME HIT THE TARGET
const solution = mtrx => {
        for (let i = 0; i < mtrx.length; i++) {
                let index = mtrx[i].indexOf(">");
                if (index > -1 && index < mtrx[i].indexOf("x")) return true; 
        }
        return false; 
}
console.log(  solution(  
         [
                [' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' '],
                [' ', ' ', '', ' ', ' '],
                ['>', ' ', '', ' ', 'x'],
                [' ', ' ', '', ' ', ' ']
         ]
         
        ) )


//Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developers
var list3 =  [
        {"firstName":"Maia","lastName":"S.","country":"Tahiti","continent":"Oceania","age":28,"language":"Clojure"},
        {"firstName":"Victoria","lastName":"T.","country":"Puerto Rico","continent":"Americas","age":30,"language":"Python"},
        {"firstName":"Yusuf","lastName":"N.","country":"Turkey","continent":"Europe","age":22,"language":"Python"},
        {"firstName":"Lukas","lastName":"X.","country":"Croatia","continent":"Europe","age":35,"language":"Python"},
        {"firstName":"Emily","lastName":"A.","country":"Northern Ireland","continent":"Europe","age":32,"language":"JavaScript"}
        ]
        
function getFirstPython(list) {
        
         list = list.find( x => x.language == 'Python')    
         return list ? `${list.firstName}, ${list.country}` : "none"

}
console.log( getFirstPython(list3) )
