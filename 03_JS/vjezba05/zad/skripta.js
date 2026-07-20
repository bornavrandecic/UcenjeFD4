const rezultat = document.getElementById('rezultat')

document.getElementById('izvedi').addEventListener('click',()=>{
   rezultat.innerHTML='' 

   const aString = document.getElementById('a').value
   const bString = document.getElementById('b').value
   const cString = document.getElementById('c').value
   const dString = document.getElementById('d').value

   const zadatak = document.getElementById('zadatak').value

   if(zadatak === '1'){
    // pocinje 1. zadatak
        if(!aString){
            rezultat.innerHTML='Unesite vrijednost A'
            rezultat.style.color='red'
            return
        }

        const a = Number(aString)

        if(!a){
            rezultat.innerHTML='A nije broj'
            rezultat.style.color='red'
            return
        }

        if(!bString){
            rezultat.innerHTML='Unesite vrijednost B'
            rezultat.style.color='red'
            return
        }

        const b = Number(bString)

        if(!b){
            rezultat.innerHTML='B nije broj'
            rezultat.style.color='red'
            return
        }

       // rezultat.innerHTML = a > b ? a : b
        if(a===b){
            rezultat.innerHTML='Jednaki su'
        }else if(a>b){
            rezultat.innerHTML = a
        }else{
            rezultat.innerHTML = b
        }

        rezultat.style.color='green'

    // zavrsava prvi zadatak
   }

   if(zadatak === '2'){
   // zavrsava drugi zadatak

   // zavrsava drugi zadatak
   }

      if(zadatak === '3'){
   // zavrsava treci zadatak

   // zavrsava treci zadatak
   }



   // zavrsava click funkcija
})
