console.log("Hello,😁🙌");
// const sum = (a,b)=>a+b;
// console.log(sum(5,5));

console.log(process.argv);

// const sum = parseInt( process.argv[2])+ parseInt(process.argv[3]);
// console.log(sum);

// destructuring
const sum = (a,b)=>a+b;
const [, ,num1,num2]=process.argv;
console.log(sum(+num1,+num2));