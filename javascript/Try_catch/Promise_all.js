let Promise_1  = new Promise((res,rej) => {
    setTimeout(() => {
        res('hello');
    },2000);
});

let Promise_2 = new Promise((res,_)=>{
    setTimeout(()=>{
        res,('hello2');
    },500);
});

async function getData() {
    try{
        let res = await Promise.all([Promise_1,Promise_2,Promise_3]);
        console.log(res);
    }catch(error){
        console.log(error);
    }
}
getData();