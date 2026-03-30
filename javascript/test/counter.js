let count =0;
const counterUI =document.getElementById('counter')

const incfun=()=>{
    count++;
    counterUI.innerHTML='';
    counterUI.append(`counter:${count}`);
    console.log('~count:',count);
};

const decfun=() =>{
    count--;
    counterUI.innerHTML='';
    counterUI.append(`counter:${count}`);
    console.log('~count:',count);
}

const resfun=() => {
    count=0;
    counterUI.innerHTML='';
    counterUI.append(`counter:${count}`);
    console.log('~count:',count);
}