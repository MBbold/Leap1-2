const a = [1,2,3,5];
console.log(a.map(num => num*2))

const b =[1994,1997,2003,1993,2001]
console.log(b.map(num => 2022-num))


const persons = [
    {id:1, name:"Dorj", age:19},
    {id:2, name:"BOLD", age:13},
    {id:3, name:"BALDAN", age:15},
    {id:4, name:"TSETSGEE", age:20},
    {id:5, name:"DULMAA", age:23}
]
const adult =[];
adult.push(persons.filter(value => value.age >=18)) ;
console.log("====================1 deh bodlogo================")

console.log("Nasan hursen humuus= ",adult)

const arr = [3, -1,8,0,2]
console.log("====================2 doh bodlogo================")
console.log("[3, -1,8,0,2] niilber= ",arr.reduce((cur, arr)=>cur+arr))
