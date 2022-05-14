

        // FINISH GUESS THE NUMBER GAME


class Guesser {
        constructor(number, lives) {
          this.number = number;
          this.lives = lives;
          this.guesses = []
        }
        guess(n) {
                if ( this.guesses.length < this.lives ) {
                        if ( n == this.number ) {
                                return true
                        } else {
                                this.guesses.push(n)
                                return false 
                        }
                } else {
                       return 'no lives left'
                }
        }
}