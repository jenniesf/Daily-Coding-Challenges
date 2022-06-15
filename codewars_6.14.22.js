
//Blood-Alcohol Content

function bloodAlcoholContent(drinks, weight, gender, time){

        let genderType = gender == 'male' ? .73 : .66
        let bac =  ( (  ( drinks.ounces * drinks.abv )  * 5.14 / weight *  genderType  ) - .015 * time ).toFixed(4)
        return Number(bac)
}
console.log( bloodAlcoholContent({ounces:12.5, abv:0.4}, 190, 'male', 1) )