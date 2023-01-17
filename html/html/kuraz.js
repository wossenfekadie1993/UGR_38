console.log("hello javascript")
var num=25;
let l="we can declare value using let";
const n=21;
num=27;

console.log(`the sum is `,num)
console.log(12%3)
var p="person";
console.log(p.charCodeAt(1))
var d=new Date();
console.log(d)
var person={name:"abebe",age:45,sex:"Male",address:"addis abeba"}
var info;
for(info in person){
    
    console.log(info)
    
    console.log(person[info])
}
var x=1;
do{
    console.log(x)
    x++
}while(x<10);