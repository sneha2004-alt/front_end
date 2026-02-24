let array=[1,2,3,4,4];
let string ='hello';
let object = {
    name:'hello'
};

console.log(array);
console.log(string);
console.log(object);

let ans = array.find((el) => el === 3);
console.log(ans);

let valueCheck = object.hasOwnProperty('name');
console.log(valueCheck);

let num1 = 'manish';

let numArr = array.fill(num1,1,4);
console.log(numArr);

let value = string.split('');
console.log(value);

let val = ['sne','ha',' gup','ta']

let ans3 = val.join('');
console.log(ans3);

//push
let arr1 = [1,2];

arr1.push(3,'sneha',5);

Array.prototype.dhakelo = function (value) {
    let index = this.length;
    this[index]=value;
};


arr1.dhakelo(7);

console.log(arr1);
//pop


Array.prototype.nikalo = function () {
    if (this.length === 0) return undefined;

    let lastIndex = this.length - 1;
    let value = this[lastIndex];

    this.length = lastIndex;  
    return value;
};