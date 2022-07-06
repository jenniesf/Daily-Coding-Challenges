        //MOD 256 without the MOD operator
function mod256WithoutMod(number) {
        let d = 256

        let q = parseInt( number / d )
        let p = q * d
        return number - p
}

console.log( mod256WithoutMod(15))