document.write('Hello')

const uvjet = false

if(uvjet){
    console.log('uvjet je true')
}


if(uvjet)
    console.log('uvjet je true')
//    console.log('OVO ŽELIM ISPISATI kada je uvjet')


if(uvjet){
    console.log('Dobro je')
}else{
    console.log('Nije dobro')
}


const ocjena = 5

if(ocjena===1){
    console.log('Nedovoljan')
}else if(ocjena===2){
    console.log('Dovoljan')
}else if(ocjena===3){
    console.log('Dobar')
}else if(ocjena===4){
    console.log('Vrlo dobar')
}else if(ocjena===5){
    console.log('Izvrstan')
}

else{
    console.log('Broj nije ocjena')
}


if(ocjena>=1 && ocjena<=5){
    console.log('Ocjena je valjana')
}

if(ocjena<1 || ocjena>5){
    console.log('Ocjena nije valjana')
}

if(!(ocjena<1 || ocjena>5)){
    console.log('Ocjena JE valjana na drugi način')
}


if(ocjena>=1 && ocjena<=5){
    console.log('Ocjena je valjana')
}else{
    console.log('Nije ocjena')
}

console.log(ocjena>=1 && ocjena<=5 ? 'Ocjena je valjana inline' : 'Nije ocjena inline')


const ime = 'Pero'

/*
 if(ime===''){
    console.log('Ime nema vrijednost')
}*/

if(!ime){
    console.log('Ime nema vrijednost 2')
}else{
    console.log(ime)
}


const b = Number('aaaaa')

console.log(b)

if(!b){
    console.log('Niste unijeli broj')
}


const x = 12

if(x>=18){
    console.log('Punoljetan je')
}
