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
// const request=new XMLHttpRequest()

// request.addEventListener('readystatechange',(e)=>{
//     if(e.target.readyState===4 && e.target.status===200){
//         const data = JSON.parse(e.target.responseText)
//         console.log(data)
//     }else if(e.target.readyState===4){
//         console.log('Error')
//     }
// })

// request.open('GET','http://puzzle.mead.io/puzzle')
// request.send()