        // BASIC SUBCLASSES - ADAM AND EVE
class God{       
        static create(){
                return [ new Man('Adam') , new Woman ('Eve')  ]

        }
}

class Human {
        constructor (name) {
                this._name = name
        }
        get name () {
                return this._name
        }
}

class Man extends Human {
        constructor(name) {
                super(name)
        }
}
class Woman extends Human {
        constructor(name) {
                super(name)
        }
}