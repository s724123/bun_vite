const myTest=(a=2,b=3)=>a+2*b
console.log(myTest())
console.log(mySquare(3))
function mySquare(x){
    return x * x;
}
//template String
const myName = "Mary"
const age = 20
const greeting = 'Hello, my name is ${myName}. I am ${age+3}years old.'
console.log(greeting)

//forEach
const numbers = [15, 4,9,16,25]
let aryStr = "";
numbers.forEach((value,index) => {
    aryStr += (index ? ", " : "") + value;
});
console.log(aryStr);
//map
const newNumbers = numbers.map((value) => value * 2);
console.log(newNumbers);
//reduce
const sum = numbers.reduce((total, value, index) => {return total +value}, 2);
console.log(sum);
const sum2 = numbers.reduce((sumStr, value, index) => {return sumStr +(index ===0?"":", ")+value;}, "");
console.log(sum2);
//filter
const aryFiltered = numbers.filter((value) => value%2 ===0);
console.log(aryFiltered);
//some
const hasOver10 = numbers.some((value) => value >100);
console.log(hasOver10);
//every
const allOver10 = numbers.every((value) => value >0);
console.log(allOver10);
//findIndex
const index16 = numbers.findIndex((value) => value >16);
console.log(index16);