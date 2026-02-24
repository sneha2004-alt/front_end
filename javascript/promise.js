/*
 let icecream =  new Promise((resolved,rejected)=>{
    let value = true;

    if (value) {
        resolved('got it....');
    } else{
        rejected('call mommy!!!!');
    }
});

icecream
   .then((res)=>{
    console.log(res);
   })
   .catch((err)=>{
    console.log(err);
   })
   .finally(()=>console.log('finally execution done✅'));
*/
   //set timeout 
console.log('A');
const timeout = () =>{
    console.log('B');
    let id = setTimeout(() => {
        console.log('this is setTimeout');
    },3000);
    console.log('C');
};
console.log('D');
timeout();
console.log('E');

//setInterval

console.log('A');

const timeOut_1 = () => {
    console.log('B');
    let id = setInterval(()=> {
        console.log('this is setInterval');
        clearInterval(id);
    },3000);
    // console.log(id)
    console.log('C');
};

console.log('D');
timeOut_1();
console.log('E');


function naam(){
    let name = 'hello';
    return () =>{
        let name = 'khan';
        return name;
    };
}

console.log(naam()());