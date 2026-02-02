//assignment operators
let count =0;
let name='Sneha';

count += 4; //count = count+4
count -= 2; //count = count -4
count *= 2; //count =count*4
count /= 2; //count = count/4

console.log(count);
//arithmatic operators[[maths -> sign's]]

let a = 6;
let b = 9;

let sum = a+b;
console.log(sum);
let sub = a-b;
console.log(sub);
let mul = a*b;
console.log(mul);
let div = a/b;
console.log(div);
let mod= a % b;
console.log(mod);
let expo= a ** b;
console.log(expo);
/*+
-
*
/
%
**
*/



//concatination  operators
let name1='Sneha';
let name2='Gupta';

// let fullname = '\n'+name1+ '\n' +name2;
// console.log(fullname);

let fullName = `${name1} ${name2}`;
console.log(fullName);

name1=name1 + ' ' + name2;


//name1 += '' + name2;
console.log(name1);

//conditional/coomparison operators-
let num1 = 4;
let num2 ='4';

console.log(nnum1 === num2);

/*
...the return value in boolean
= = -> LHS == RHS DATA[VALUE✅,TYPE❌]
! = -> LHS !== RHS DATA[VALUE✅,TYPE❌]
===-> LHS === RHS DATA[VALUE✅,TYPE✅]

<
>
=<
>=
*/

//LOGICAL OPERATOR 
let flag1 = true;
let flag2 = false;
let flag3 = false;

console.log(true || false);
console.log(!flag3);

let value ='null';
let ans = value ?? 50;

console.log(ans)

//ternary operators
 let flag  = false;

 let ans1  = flag ? 'i am in' : 'i am out';
 console.log(ans1)

//unary operators
let name4='5';

name4 = +name4;
console.log(+name4);

//types of operators
console.log(typeof name4);

//conversion between string to number || number to string

let xyz = '123';
console.log(+xyz);
console.log(typeof +xyz);

//method

let ans55 =parseInt(xyz);
console.log(ans55);
console.log(typeof ans55);
//constructor method
let ans56 =Number(xyz);
console.log(ans55);
console.log(typeof ans56);

// number to string 
let numbertoString = 56;

console.log();

const jugad = numbertoString + '';
console.log('jugad:ans',jugad,'type:',typeof jugad);

const jugad_2 = numbertoString.toString();
console.log('jugad_2:ans',jugad_2,'type:',typeof jugad_2);

const jugad_3 = numbertoString;
console.log('jugad_3:ans',jugad_3,'type:',typeof jugad_3);


//binary conversion
