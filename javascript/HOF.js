let arr =[
    'mango',
    'kiwi',
    'orange',
    'bannana',
    'apple',
    'orange',
    'bannana',
    'apple',
    'orange',
    'bannana',
    'apple',
  ];

//   for (let i=0;i <arr.length;i++){
//     console.log(arr[i]);
//   }

//   for (let key of arr) {
//     console log(arr[key]);
//   }

//for (let key in arr) {
//     console log(arr[key]);
//   }
 /* ternary operator
 condition ? true : false */

 let Map = arr.map((element,index,array)=>{
    return element === 'bannana'
    ? [true,index,array[index]]
    : [false,index,array[index]];

    // if (element === 'banaana'){
    //     return [true,index];
    // }else{
    //     return [false,index];
    // }
 });
 console.log(ansMAp);

 let ansFilter = arr.filter((el,i,array)=>{
    return element !==='banaana';
 });
 console.log(ansFilter);

 let ansReduce = arr.reduce((obj,currValue)=>{
    // console.log(obj,currValue);
    // return obj;
    obj[currValue] = (obj[currValue] || 0)+1;
return obj;
 },{});
 console.log(ansReduce);