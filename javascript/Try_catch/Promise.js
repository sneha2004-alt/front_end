let icecream = new Promise((re,rej)=>
{
    let flag =false;
    if(flag){
      res('get');
    }else{
       rej('not found');
      }
});

icecream
   .then((res)=>console.log('rees:->',res))
   .catch((err)=>console.log('err:->',err))
   .finally(()=>console.log('done'));

   /*
    Promise
         all
         allsetteld
         race
         any
         */