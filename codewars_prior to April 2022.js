//---------------------------------------------------------------
//---------------------------------------------------------------
//              ****** CODE WAR ******
//---------------------------------------------------------------
//---------------------------------------------------------------

//      *** MULTIPLY TWO NUMBERS (PARAMETERS) ***
// function calcPaper ( n , m ) {
//         return n <=0 || m <=0 ? 0 : n * m   //? means if true do this and : means otherwise do this
//         }
//         console.log ( calcPaper ( 2 , 10 ) )

//      `*** RETURN LAST THREE CHARACTERS OF A STRING ***
// let str = 'appleS'
// let newStr = str.charAt(str.length-3) + str.charAt(str.length-2) + str.charAt(str.length-1) 
// console.log( newStr )

//      *** MAKE STRING INTO UPPERCASE LETTERS ***
// let upp = str.toUpperCase(0)
// console.log ( upp) 

//      *** EXAMPLE OF AN OBJECT USING LITERAL NOTATION ***
// let stopWatch = { }
// stopWatch.color = 'black'
// stopWatch.shape = 'round'
// stopWatch.size = 'big'
// stopWatch.time = 12
// stopWatch.whatTime = function ( time ) {
//         console.log ( stopWatch.time )
// }
// stopWatch.color = function ( color ) {
//         console.log ( color )
// }

//       *** REMOVE FIRST AND LAST CHARACTER OF A STRING ***
// function removeChar( str ){     
//         // str.slice( str.length-1, 1 )
//         // let result = str.slice( 1 )
//         let result = str.slice ( 1, -1 )
//         return result
// };
// console.log( removeChar(  'hellothere' ))  //return ellother

// const removeChar = str => str.slice ( 1, -1)
// console.log ( removeChar("hello")  )

//       *** SUM SQAURE FUNCTION ***
// function squareSum(numbers){
//         let sum = 0
//         for (let i =0; i < numbers.length; i++) {
//                 sum = sum + numbers [i] ** 2
//         }
//         return sum
// }
// console.log (  squareSum( [ 1 , 2, 2])   )

        // another way to write the same above function 
// let numbers = [ 1, 2, 2 ]
// let squareSum = 0
// numbers.forEach ( (value) => { 
//         squareSum = squareSum += value ** 2 
// }  )
// console.log ( squareSum )
        // OR
// function squareSum(arr){
//         let total = 0
//         arr.forEach( x => { 
//                 total = total + (x ** 2 )
//       })
//          return total 
//       }
        // OR
// function squareSum(numbers){
//         let sum = 0;
//         numbers.forEach( n => {
//           sum += n * n
//         });
//         return sum;
//       }
//       console.log ( squareSum ( [ 1, 2, 2]  ))

//  *** MERGE TWO ARRAYS AND SORT IN ABC ORDER AND REMOVE DUPLICATES ***
// function mergeArrays(arr1, arr2) {      
//         let merged = arr1.concat(arr2)
//         merged.sort( (a,b) => a-b  )
//         let uniqueArr = [...new Set(merged)]
//         return uniqueArr
// }
// console.log( mergeArrays ( [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] )  )

//  *** FIND FIRST NON CONSECTIVE NUMBER ***
// function firstNonConsecutive (arr) {
//         for (let i = 0; i < arr.length-1; i++) {
//                 if (  arr[i] + 1  !==   arr[i + 1 ]) {
//                     return arr[i + 1] 
//         }      
//         }
//         return null
// }
// console.log (firstNonConsecutive( [0,1,2,3,4,5,6,8] )) // return 8

        // or another way: 

        // starting from second number to check if difference is 1
// function firstNonConsecutivex (arrx) {
//         for (let i = 1; i < arrx.length; i++) {
//                 if ( arrx [ i ] - arrx[i-1] !== 1 ){
//                         return arrx [ i]
//                 } 
//         }
//         return null
// }
// console.log(firstNonConsecutivex( [0,1,2,3,4,5,6,7,8] ))

//      *** Using FILTER to filter out items you do not want indicated from another array ***
// function gooseFilter (birds) {
//         const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//         let filtered = birds.filter( item => item != geese.includes(item) ) 
//         console.log( filtered)
//         console.log( birds)
//       }
// gooseFilter(  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]  )

//       *** SUM THE TOTAL OF POSITIVE NUMBERS IN AN ARRAY ***
// function positiveSum(arr) {
//         let sum = 0
//         for ( let i = 0; i <= arr.length-1; i++)  {
//                 if( arr[i] >= 1) {
//                         sum = sum + arr[i]
//         }    
//   }
//   return sum
// }
// console.log( positiveSum( [1,-4,7,12] ))

        // ANOTHER WAY TO DO THIS w/ FOREACH and ARROW function
// function positiveSum(arr) {
//         let sum = 0
//         arr.forEach( (x) => { 
//                 if ( x >= 1) {
//                 sum = sum + x
//                 }
//             } )
//   return sum
// }
// console.log( positiveSum( [1,-4,7,12] ))

        // or using REDUCE and ARROW FUNCTIOn
// function positiveSum(arr) {
//       return arr.reduce( (acc,c) => c > 0 ? c + acc : acc, 0)
// }
// console.log( positiveSum( [1,-4,7,12] ))

        // *** CHECKING FOR SPECIFIC WORDS IN AN ARRAY ***
// 
// function well( x ){
//         let value = 'good'
//         let n = 0
//         x.forEach( ( x ) => {
//                 if ( x == value) {
//                         n++
//                 }
//         } )
// if (n == 0) {
//         return 'Fail!'
// } else if( n <= 2) {
//         return "Publish!"
// }
//         return "I smell a series!"
// }
// console.log( well ( ['bad', 'bad', 'bad', 'good','good','good'] )  )


        // *** COUNT OF POSITIVES/SUM OF NEGATIVES

// function countPositivesSumNegatives(input) {
//         let counter = 0
//         let sum = 0
//         let newArr = []
//         // check for null and empty input first
//         if (input === null || input.length === 0) {
//                 return newArr
//         }
//         // run loop to count posivites and sum negs
//         for ( let i = 0; i < input.length; i++) {   
//                  if ( input[i] > 0) {
//                         counter++
//                 } else if ( input [i] < 0) {
//                        sum += input[i]
//                 }   
//         } 
//        return newArr = [counter, sum]  
// }
// console.log (countPositivesSumNegatives( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]   ))

        //ABBREV A TWO WORD NAME

// function abbrevName(name){
//         let splitName = name.split(' ')   // split string into array
//         let first = splitName.map( x => x[0] )  // map each element's first char
//         return first.join('.').toUpperCase()      // join array into a string and make uppercase
// }
// console.log ( abbrevName( "sam harris" ) )  // return S.H

// let spliter = ['Sam' , 'Harris']
// let vv = spliter[0]
// console.log(spliter)
// console.log( vv )
// console.log( vv[0] )
        // testing out charAt
// let namer = "sam smith"
// let lol = namer.charAt(0)
// console.log(namer)
// console.log(lol)
        // another way to do this: 
// function abbrevName(name){
//         let splitName = name.split(' ')   // split string into array
//         let first = splitName[0].charAt(0)  
//         let second = splitName[1].charAt(0)  
//         let together = first.concat(".",second)
//         console.log(splitName)
//         console.log(first)
//         console.log(second)
//         console.log(together)
// }
//  abbrevName( "sam harris" )  // return S.H

        //  A NEEDLE IN A HAYSTACK

// function findNeedle ( haystack ) { 
//         let needle = 'needle'
//         for (let i = 0; i < haystack.length; i++) {
//                 if ( haystack[i] === "undefined") {
//                         return `undefined, Your function didn't return anything`
//                 }
//                 else if ( haystack[i] === needle ) {
//                         return `found the needle at position ${i}`
//                 }
//         }
// }
// console.log ( findNeedle(   [ 'hi', 'undefined','needle' , 'hello']      )   )   

        // CONVERT NUMBER TO REVERSED ARRAY OF DIGITS

// function digitize(n) {
//         // convert number into a string to use Split into array. 
//         // then reverse and Map to Y, which comes back as a number(not a string)
//         let y = []
//         y = n.toString().split('').reverse().map(Number)
//         return y
// }
// console.log ( digitize( 348597 ) )

        // FAKE BINARY
// function fakeBin(x){
//        //let y = x.replaceAll('5','1').replaceAll('4','0')
//         let y = x.split('')                       
//         for (let i = 0 ; i < y.length; i++) {        
//                 if ( y[i] < 5 ) {
//                         y[i] = 0
//                 } else {
//                         y[i] = 1
//                 }

//         }
//         return y.join('')                             
// }
// console.log(    fakeBin(  '45385593107843568'  ) )
//                          // or  
// function faker (x) {
//         return x.split('').map( n => n < 5 ? 0 : 1 ).join('')
// }
// console.log(    faker(  '45385593107843568'  ) )

        // COUNTING SHEEP

// function countSheeps(arrayOfSheep) {
//         let counter = 0
//         for (let i = 0; i < arrayOfSheep.length; i++) {
//                 if ( arrayOfSheep[i] == true ) {
//                         counter = counter + 1
//                 }
//         }
//         return counter      
// }
        // OR

// function countSheeps(arrayOfSheep) {
//         let counter = 0
//         arrayOfSheep.forEach( (x,i) => x == true ? counter+=1 : 0)
//         return counter      
// }
// console.log( countSheeps (  [   true,  true,  true,  false,
//                                 true,  true,  true,  true ,
//                                 true,  false, true,  false,
//                                 true,  false, false, true ,
//                                 true,  true,  true,  true ,
//                                 false, false, true,  true  ]    )  )

        // I LOVE YOU A LITTLE, A LOT, PASSIONATELY... NOT AT ALL

// function howMuchILoveYou(nbPetals) {
//      let arr = ['I love you', 
//                 'a little', 'a lot', 
//                 'passionately' , 'madly' , 
//                 'not at all']
//      for (let i = 0; i < nbPetals; i++) {
//         arr.push( arr[i] )
//      }
//      return arr[  nbPetals -1  ]
// }
// console.log( howMuchILoveYou( 10 ) )   // return passionately
        // OR 
// const phrases = [
//         'I love you',
//         'a little',
//         'a lot',
//         'passionately',
//         'madly',
//         'not at all',
//     ]
//     function howMuchILoveYou(n) {
//          return phrases [   (n - 1) % phrases.length   ] 
//     }
// console.log( howMuchILoveYou( 15 ) )   
// console.log( phrases.length)             
// console.log( 14 % phrases.length)       


        // REMOVE FIRST AND LAST CHARACTER - PART 2
// function array(arr){
//         if ( arr.length <= 4 )  {
//                 return null
//         } 
//         let y = arr.split(',')         
//         let x = y.slice( 1 , y.length-1).join(' ')  
//         return x        
// }
        // OR to automate null response to everything that doesnt work in first part of ||

// function array(arr){ 
//         let y = arr.split(",").slice( 1 , -1 ).join(" ") || null
//         return y
// }
// console.log( array( '1,2,3,4,5,6,7' ) )


        // ARRAY PLUS ARRAY
// function arrayPlusArray(arr1, arr2) {
//         let sum = 0
//         let z = arr1.concat(arr2)

//         for (let i = 0; i < z.length; i++) {
//                 sum = sum + z[i]
//         }
       
//         return sum
// }
        // OR 
// function arrayPlusArray(arr1, arr2) {
//         let sum = 0
//         let z = arr1.concat(arr2)
//         z.forEach ( x => sum += x)
//         return sum
// }
// console.log(  arrayPlusArray ( [1, 2, 3] , [4, 5, 6] ) )

        // IS THERE A VOWEL IN THERE?

// function isVow(a){
//         for (let i = 0; i < a.length; i++) {
//                 if ( a[i] == 101) {
//                         a[i] = 'e'
//                 } else if ( a[i] == 97) {
//                         a[i] = 'a'
//                 }else if ( a[i] == 105) {
//                         a[i] = 'i'
//                 } else if ( a[i] == 111) {
//                         a[i] = 'o'
//                 } else if ( a[i] == 117) {
//                         a[i] = 'u'
//                 }
//         }
//         return a
// }
// console.log( isVow ( [ 101,121,110,113,113,103,121,121,101,107,103 ] ) )

// let sentence = 'hello there '
// console.log(` ${sentence.charCodeAt(4)} is equal to ${sentence.charAt(4)}`);

// function isVow(a){     
//         for (let i = 0; i < a.length; i++) {
//                 if (a[i] === 97 || a[i] === 101 || a[i] === 105 || a[i] === 111 || a[i] === 117) {
//                         let number = a[i];
//                         let vowel = String.fromCharCode(number);  
//                         a[i] = vowel;
//                 }
// }
//         return a
// }
// console.log( isVow ( [ 97,101,121,110,113,113,103,121,121,101,107,103 ] ) )

// function isVow ( a ){
       
//                 for (let i=0, l=a.length; i<l; ++i) {
//                         let char = String.fromCharCode( a[i] )   
//                                 console.log(char)
//                         if ('aeiou'.indexOf(char) !== -1) {       
//                                 a[i] = char }
//         }
//                 return a;
// }
// console.log(    isVow ( [ 97,101,121,110,113,113,103,121,121,101,107,103 ]  )     )


        // YOU ONLY NEED ONE - BEGINNER
// function check(a, x) {
//   return a.includes(x)
// }
// console.log( check ( [66, 101], 66 )  ) // return true


        // SORT AND STAR

// function twoSort(s) {
//         s.sort()                               
//         return s[0].split('').join('***')     
// }

// console.log ( twoSort( ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"] ) )


        // REMOVING ELEMENTS
// function removeEveryOther(arr){
//         let newArr = []
//         for (let i = 0; i < arr.length; i +=2) {
//                 newArr.push( arr[i] )
//         } 
//         return newArr
// }
// console.log(removeEveryOther ( ["4","i","k","9","m","9","d","d","t","c","9","k","r","5","p","z","1","t","z","o","q"] ) )
        // OR using filter
// function removeEveryOther(arr){
//         let newArr = arr.filter( (element, index) =>  index % 2 ===0 )
//         return newArr
// }
// console.log(removeEveryOther ( ["4","i","q","9","m","9","d","d","t","c","9","k","r","5","p","z","1","t","z","o","q"] ) )

        // ENUMERABLE MAGIC #1 - TRUE FOR ALL? -- using EVERY
// function all( arr, fun ){      
//         return arr.every(fun)  // every test each element thru function and returns boolean
// }
// console.log( all( [1, 2, 3, 4, 5] , function(v)  {  return v<9  } ))

// const isBelowThreshold = (currentValue) => currentValue < 40;
// const array1 = [1, 30, 39, 29, 10, 13];
// console.log(  array1.every( isBelowThreshold  )  )

//         // OR
// let funs =  y => y < 9
// function all( arr, fun ){      
//         return arr.every(funs)  

// }
// console.log( all( [1, 2, 3, 4, 5] ,  funs  ))


        // MULTIPLE OF INDEX

// function multipleOfIndex(array) {     
//         let newArr = []              
//         for (let i = 0 ; i < array.length; i++) {
//                 if ( array[i] %  i     == 0 ){          
//                         newArr.push( array[i] )        
//                 }
//         }
//         return newArr
// }
// // array.indexOf( array[i] )                             
// console.log( multipleOfIndex( [68, -1, 1, -7, 10, 10])  )

        // or
// function multipleOfIndex(array) {     
//         return array.filter( (x,i) => x % i == 0) 
// }
// console.log( multipleOfIndex( [68, -1, 1, -7, 10, 10])  )

// function noSpace(x){
//         return x.split(' ').join('')
// }
// console.log( noSpace( '8 j 8   mBliB8g  imjB8B8  jl  B' ))


        // SUM MIXED ARRAY

// function sumMix(x){
//         let y = []
//         let sum = 0
//         for( let i = 0; i < x.length; i++) {
//                let z = Number(  (x[i] ) )  
//                 y.push(z)                  
//         }
//         for (let i = 0;i < y.length ; i++){          
//                 sum = sum+y[i]
//         }
//         return sum

// }
// console.log(  sumMix( [9, 3, '7', '3'] ) )
        // OR WRITTEN SHORTER:
// function sumMix(x){
//         let y = []
//         let sum = 0
//         x.forEach( a => y.push( Number( a )      ) )
//         y.forEach( (element) => sum += element )
//         return sum
// }
// console.log(  sumMix( [9, 3, '7', '3'] ) )

        // SORT NUMBERS - 7KYU
// function solution(nums){
//         if ( nums == null) {
//                 return []
//         }
//         return nums.sort( (a,b) => a-b)

// }
// console.log( solution(   [1,2,3,10,5]   ) ) 
        // or shorter
// function solution(nums){
//         return (nums || []).sort( (a,b) => a-b)
// }
// console.log( solution(   [1,2,3,10,5]   ) )
    
        // COUNT BY X
// function countBy( x, n) {
//         let z = []
//         for (let i = 1; i <= n ; i++) {
//                 z.push( x  * i )   
//         }
//         return z
//       }  
// console.log( countBy( 2,5 )  ) // return [1,2,3,4,5,6,7,8,9,10]


        // PICK A SET OF FIRST ELEMENTS
//let arr = ['a', 'b', 'c', 'd', 'e']

// function first(arr, n) {  
//         let newArr = []     
//         if ( n == null ) {                     
//                 newArr.push(arr[0])
//         } 
//         for (let i = 0 ;  i < n && i < 5 ; i++ ) {         
//                 newArr.push( arr[i]  )
//       } 
//         return newArr
// }
// console.log( first( arr , 10) )
        // OR
// function first(arr, n) {   
//         if (n == null) {
//                 return arr.slice(0,1)
//         }
//         return arr.slice(0,n) 
// }
// console.log( first( arr,10 ) )

        // SWAP VALUES
// var arr = [1,2] 
// function swapValues(arr) {
//         var args = arr
//         var temp = args[0];
//         args[0] = args[1];
//         args[1] = temp;
//         return arr
// }
// console.log( swapValues(arr))