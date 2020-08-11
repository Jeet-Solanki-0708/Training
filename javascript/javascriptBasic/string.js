let city='Ahmedabad'
let country='India'
let location=city+', '+country;

console.log(location)

let studentScore=18
let maxScore=20

console.log((studentScore*100)/maxScore)

let age=30

if(age<30){
    console.log('Age less than 30')
}
else if(age===30){
    console.log('Equal')
}
else{
    console.log('Age greater than 30')
}

let first=true;
let second=false;

if(first && second){
    console.log('Vegan')
}
else if(first || second){
    console.log('Both')
}
else{
    console.log('Non Veg')
}