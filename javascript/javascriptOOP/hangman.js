const Hangman=function(word,guessRemaining,){
    this.word=word.toLowerCase().split('')
    this.guessRemaining=guessRemaining
    this.guessedLetters=[]
}

Hangman.prototype.getPuzzle=function(){
    let puzzle=''
    this.word.forEach((letter)=>{
        if(this.guessedLetters.includes(letter) || letter===' '){
            puzzle+=letter
        }else{
            puzzle+='*'
        }
    })
    return puzzle
}

Hangman.prototype.makeGuess=function(guess){
    guess=guess.toLowerCase()
    const isUnique=!this.guessedLetters.includes(guess)
    const isBadGuess=!this.word.includes(guess)
    if(isUnique){
        this.guessedLetters.push(guess)
    }
    if(isUnique && isBadGuess){
        this.guessRemaining--;
    }
}

const game1=new Hangman('cat',2)

console.log(game1.getPuzzle())
console.log(game1.guessRemaining)


const game2=new Hangman('New Jersey',4)
console.log(game2.getPuzzle())

window.addEventListener('keypress',function(e){
    const guess=String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    console.log(game1.getPuzzle())
})