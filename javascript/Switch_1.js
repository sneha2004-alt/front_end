const value = undefined;

switch (null){
    case true:
    console.log('yes');
    break;

    case false:
        console.log('no');
        break;

        default:
            console.log('please select boolean value true/false');
}







//function's
/*
define
name-convention
call
 */
function sumofvalue(a,b,c){
    console.log(a + b + c);
    return a + b + c;
}

console.log(sumofValue(10,7,3));

const aarrowfunc = (a,b,c) =>  {
    return a + b + c
}

//const ans = arrowfunc(1,2,3);
console.log(arrowfunc(1,2,3));