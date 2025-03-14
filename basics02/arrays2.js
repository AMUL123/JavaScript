const marvel_heros= ["thor", "Ironman","spiderman"]
const dc=["superman", "flash", "batman"]
// all_heros=marvel_heros.concat(dc);
// console.log(all_heros);

//sprade methods ****
const all_heros=[...marvel_heros,...dc]
// console.log(all_heros);


const another_array=[1,2,3,4,[5,6],7,[8,9,[10,11]]];

const real_another_arrays=another_array.flat(Infinity);
// console.log(real_another_arrays);


//This is checking that Amul is array or not
// console.log(Array.isArray("Amul"))

//To convert into the array 
console.log(Array.from("AMUL"));


//Converting Varialbe into the array
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
