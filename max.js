const [, ,numbers]=process.argv;
console.log(numbers)
const arr = JSON.parse(numbers);
// let large = arr[0];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>large){
//         large=arr[i];
//     }
// }
// console.log(large);

console.log(Math.max(...arr));

// string to array =>JSON.parse