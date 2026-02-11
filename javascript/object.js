let name = 'khan';
console.log(name);

let obj={
    name: 'Sneha',
};

//read
console.log(obj.name);

//create
obj.age = 99;
console.log(obj);

// update
obj.age =102;

delete obj.age;

console.log(obj);

// CRUD
//CREATE
//READ
//UPDATE
//DELETE

//LOOPING

let array = [
    1,
    2,
    true,
    false,
    {name:'sneha'},
    ['abhishek','kashish'],
    'renee',
];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);

//for("initaialization","condition","increment++" / decrement--"){
//code of output//}
for(let i=0; i<array.length; i++){
    console.log(
        `\n\ this value :${array[i]} \n\  \n\ this is index : ${i}`);
    
}























