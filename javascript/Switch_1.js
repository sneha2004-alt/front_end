// const value = undefined;

// switch (value) {
//     case true:
//         console.log('yes');
//         break;

//     case false:
//         console.log('no');
//         break;

//     default:
//         console.log('please select boolean value true/false');
// }

// // Normal Function
// function sumofvalue(a,b,c){
//     return a + b + c;
// }

// console.log(sumofvalue(10,7,3));

// // Arrow Function
// const arrowfunc = (a,b,c) => {
//     return a + b + c;
// };

// console.log(arrowfunc(1,2,3));

// Calculator
function Calc(n1, n2, opts){

    switch(opts){
        case '+':
            return n1 + n2;

        case '-':
            return n1 - n2;

        case '*':
            return n1 * n2;

        case '/':
            return n1 / n2;

        default:
            return 'please select correct operator!';
    }
}

console.log(Calc(10,5,'+'));
console.log(Calc(10,5,'*'));
