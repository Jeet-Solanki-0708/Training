import uuidv4 from 'uuid/v4'
import Hangman from './hangman'
import getPuzzle from './request' 

console.log(uuidv4())

const puzzleEl=document.querySelector('#puzzle')
const guessEl=document.querySelector('#guesses')
const statusEl=document.querySelector('#status')
const game1=new Hangman('Cat',2)

puzzleEl.textContent=game1.getPuzzle()
statusEl.textContent=game1.getMessage()

window.addEventListener('keypress',function(e){
    const guess=String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent=game1.getPuzzle()
    game1.calculateStatus()
    statusEl.textContent=game1.getMessage()
})


getPuzzle('1').then((puzzle)=>{
    console.log(puzzle)
},(err)=>{
    console.log(err)
})