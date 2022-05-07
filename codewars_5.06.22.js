        // WELCOME!
function greet(language) {
        let conversion = {
                english: 'Welcome',
                czech: 'Vitejte',
                danish: 'Velkomst',
                dutch: 'Welkom',
                estonian: 'Tere tulemast',
                finnish: 'Tervetuloa',
                flemish: 'Welgekomen',
                french: 'Bienvenue',
                german: 'Willkommen',
                irish: 'Failte',
                italian: 'Benvenuto',
                latvian: 'Gaidits',
                lithuanian: 'Laukiamas',
                polish: 'Witamy',
                spanish: 'Bienvenido',
                swedish: 'Valkommen',
                welsh: 'Croeso'
        }
        return conversion[language] || 'Welcome'
}


class Greets {
        constructor (language) {
                this.language = language
                this.english = 'Welcome'
                this.czech = 'Vitejte'
                this.danish = 'Velkomst'
                this.dutch ='Welkom'
                this.estonian = 'Tere tulemast'
                this.finnish = 'Tervetuloa'
                this.flemish = 'Welgekomen'
        }
        toGreet() {
                console.log ( this[this.language] )
        }
}