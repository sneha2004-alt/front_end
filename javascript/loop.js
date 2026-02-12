// // //(1) print number from  1-10 using a LOOP//
// let arr = [];
// for (let i = 1; i <= 10; i++) {
//   arr.push(i);
// }

// for (let j = 0; j < arr.length; j++) {
//   console.log(arr[j]);
// }

// // (2)print all even number number between 1 and 50.& // (3)print all odd number between 1 and 50
// for (let i = 1; i <= 50; i++) {
//   if (i % 2 === 0) {
//     console.log(`this is even number :-${1}`);
//   } else {
//     console.log(`this is odd number :-${i}`);
//   }
// }

// // (4)print the multiplication table of 5.
// for (let i = 1; i <= 20; i++) {
//   console.log(`5 x ${i} = ${5 * i}`);
// }

// // (5)print number from 100 down to 1(reverse order).
// for (let i = 20; i >= 1; i--) {
//   console.log(i);
// }

// // (6)print the sum of numbers from 1 to 100.
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum = sum + i;
// }

// console.log("Sum from 1 to 100 =", sum);

// // (7)print the square   of the first 10 natural number.
// for (let i = 1; i <= 10; i++) {
//   console.log(`square of ${i}=${i * i}`);
// }
// // (8)print the cube of the first 10 natural nnumber

// for (let i = 1; i <= 10; i++) {
//   console.log(`cube of ${i}=${i * i * i}`);
// }
// // (9)print the first 10 multiplies of 3.
// for (let i = 1; i <= 10; i++) {
//   console.log(`3x ${i} = ${3 * i}`);
// }

// (10)print the factorial of a given number.
let num = +process.argv[2];
let fact=5
for (i = 1; i <= num; i++) {
 fact=fact * i;
}
console.log(fact)
