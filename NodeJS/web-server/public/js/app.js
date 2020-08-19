console.log('In app js')

const messageOne=document.querySelector('#message1')
const messageTwo=document.querySelector('#message2')

document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault()
    const address=document.querySelector('input').value
    fetch('http://localhost:3000/weather?address='+address).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                messageOne.textContent=data.error
                messageTwo.textContent=''
                console.log('Error')
            }else{
                messageOne.textContent=data.location
                messageTwo.textContent=data.foredata.weather_descriptions[0]
                console.log(address)
                console.log(data)
            }
        })
    })
})