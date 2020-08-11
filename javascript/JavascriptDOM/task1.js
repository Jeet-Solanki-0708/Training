const p=document.querySelectorAll('p')

for(let i=0;i<p.length;i++){
    if(p[i].textContent.toLowerCase().includes('the')){
        p[i].remove()
    }
}