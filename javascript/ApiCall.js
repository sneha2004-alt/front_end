let Base_Api =''

const ApiCall = async() => {
   /*etch(Base_Api)
    .then((res)=> res.join()) //readableStream -> parse -> object
    .then((res) => console.log(res))
    .catch((err)=>console.log(err));*/

    try{
        let res = await fetch(Base_Api);
        let value = await res.json();
        console.log(value);
    }catch (error){
        console.log(error);
    }
    };
    ApiCall();