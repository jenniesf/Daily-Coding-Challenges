// COLOR GHOST
class Ghost {
        constructor(){
                this.color = this.pick()
        }
        pick() {
                let colors = ['white','yellow','purple' , 'red']
                return colors [ Math.floor(Math.random()*4) ]
        }
}