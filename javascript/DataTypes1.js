// primitive -[call by value] [point to memory]

/*
 * ! string-"" '' ``
 * # number - 0-9
 * $ boolean - true/false
 * & symbol - symbol()
 * & undefined - undefined
 * ? null - null
 * BigInt -123443754588.n
 * 
 */

// non-primitive -[call by refrence] [point to address]

/**
 * array -[]
 * # object - {}
 * $ function - ()
 */

let name ='shivam';
//console.log('~name:',name);

name = 'Renee';
//console.log('~name:',name);

name[0] ='S';
//console.log('~name:',name);
//console.log('~name[0]:',name[0]);

let arr=[
    1,
    3,
    4,
    'shivam',
    'renee',
    [true,false],
    {name:'mehfooz',age:99},
];


arr[0]='sneha';
arr[1]='abhishek';


console.log('~ arr[0]:',arr[0]); //sneha
console.log('~arr:',arr);
