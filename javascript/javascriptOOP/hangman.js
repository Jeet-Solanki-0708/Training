const Hangman=function(word,guessRemaining){
    this.word=word.toLowerCase().split('')
    this.guessRemaining=guessRemaining
    this.guessedLetters=[]
    this.status='playing'
}

Hangman.prototype.getMessage=function(){
    if(this.status==='playing'){
        return `Guesses left: ${this.guessRemaining}`
    }else if(this.status==='failed'){
        return `Nice try! Word was "${this.word.join('')}"`
    }else{
        return "Great you guessed right"
    }
}

Hangman.prototype.calculateStatus=function(){
    let finished=true
    this.word.forEach((letter)=>{
        if(this.guessedLetters.includes(letter)){

        }else{
            finished=false
        }
    })
    if(this.guessRemaining===0){
        this.status='failed'
    }else if(finished===true){
        this.status='finished'
    }else{
        this.status='playing'
    }
    return this.status
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
    if(this.status!=='playing'){
        return
    }
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

