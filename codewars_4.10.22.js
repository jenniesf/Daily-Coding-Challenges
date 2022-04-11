// LOGICAL CALULATOR

function logicalCalc(array, op){  
        let math = array[0];
        for( let i = 1; i < array.length; i++) { 
                if (op == "AND")  {
                        math = math && array[i];
                }
                if (op == "OR") {
                        math = math || array[i];
                }
                if ( op == "XOR") {
                        math = math != array[i];
                }
        }
        return math;
}


