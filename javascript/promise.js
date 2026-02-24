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