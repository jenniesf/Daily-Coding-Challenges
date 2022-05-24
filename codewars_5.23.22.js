        // NICE ARRAY
function isNice(arr){
        let nice = []
        if ( arr.length == 0  ) nice.push(false) 
        
        for ( let i = 0; i < arr.length ; i++){
                let a = arr[i] + 1  
                let b = arr[i] - 1  
                arr.includes(a) == true || arr.includes(b)  == true ? nice.push(true) : nice.push(false)
        } 
        return nice.includes(false) == true ? false : true
}