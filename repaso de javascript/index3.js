const number=[0,3.1,9.81]
//var let const
const diferentesTipos=['manzana', 2, 8.0, true, {name:'Juan', apellido:'Perez'}]
console.log(diferentesTipos.length)

var nombre='Juan' //string
console.log(typeof nombre);
nombre='Juanita'
console.log(nombre);
const nombre2='Juana'
console.log(typeof nombre2);
let nombre3='Luis'
console.log(typeof nombre3);

let companyString='Facebook,Google,Amazon'
let companies=companyString.split(',')
console.log(companies);

const fruta=['manzana', 'banana', 'frutilla']
console.log(fruta.reverse());

let primerfruta=fruta[0]
console.log(primerfruta);
//fruta.pop()
fruta.shift()
fruta.push('piña')
fruta.unshift('naranja')
console.log(fruta);

const firstList=[1,2,3]
const secondList=[4,5,6]
const thirdList=firstList.concat(secondList)
console.log(thirdList);
console.log(thirdList.length);

const numbers=[1,2,3,4,5,5]
//console.log(numbers.toString());

console.log(numbers.splice());
console.log(numbers.splice(1,3));


console.log(numbers.join());
console.log(numbers.join(''));
console.log(numbers.join(' '));
console.log(numbers.join(' , '));




console.log(numbers.indexOf(5));
console.log(numbers.lastIndexOf(5));
console.log(numbers.includes(-1));
console.log(Array.isArray(numbers));
let num=3
console.log(Array.isArray(num));

const webTech=[
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
console.log(webTech.sort());



let num1=3
if (num1>0){
    console.log(`${num1} es un numero positivo`);
}

let a='b'
if (a>0){
    console.log(`${a} es un numero positivo`);
} else if (a<0){
    console.log(`${a} es un numero negativo`);
} else if (a==0){
    console.log(`${a} es cero`);
} else {
    console.log(`${a} no es un numero`);
}

for (let i=0; i < 5; i++){
    console.log(i);
}

let emojis=['😊', '😂', '🤣']
for (const emoji of emojis){
    console.log(emoji);
}

const sumar=(a,b)=>{return a+b}
console.log(sumar(2,3));


let foods=['🍕','🍔','🍟',3,4]
let [pizza, hamburguesa, papas]=foods
console.log(pizza);
console.log(papas);

//let foodsEmoji=foods.map( food=>food+'😁')
//console.log(foodsEmoji);

console.log(foods);
let filterFoots=foods.filter(food=>typeof food=='string')
console.log(filterFoots);

let user={
    foto:'😫',
    name:'Jorge',
    age:30
}
let {foto:f, name:n, age:ag}=user
//console.log(f);

let mostrarNombreEdad=({name:n, age:e})=>{
    console.log(n);
    console.log(e);
}

mostrarNombreEdad(user)


let nums1=[1,2,3,4,5]
let nums2=[6,7,8,9,10]
let nums3=[nums1,...nums2]
console.log(nums3);
