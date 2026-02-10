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

let num_1 = +process.argv[2];
let num_2 = +process.argv[3];
let opeartors = process.argv[4];

function Calc(n1, n2, opts){
    console.log(opts);
    
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
            return null;
    }
}

const result = Calc(num_1,num_2,opeartors);

if(result ===null){
    console.log('please select correct operators!!');
}else{
    console.log(Math.abs(result));
}

const addfunc  =(A,B)=>{
    return A + B;
};

console.log(addfunc(num_1,num_2));