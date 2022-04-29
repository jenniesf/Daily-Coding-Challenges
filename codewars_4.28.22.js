// BINARY XSORE -  XOR
const sxore = (number) => {
        if (number % 4 === 0) {
                return number;
        } else if (number % 2 === 0) {
                return number + 1;
        } else if ((number + 1) % 4 === 0) {
                return 0;
        } else if ((number + 1) % 2 === 0) {
                return 1;
        }
}
console.log(  sxore(50) ) // 51