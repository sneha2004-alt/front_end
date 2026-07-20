const http =require('http');

const fs = require('fs');

const {Buffer} = require('node:buffer');

const server = http.createServer((req,res)=>{
    let str ='';
    if(req.url === '/create' && req.method === 'POST'){
        req.on('data',(value) => {
            str += value;
        });
    req.on('end',()=>{
        fs.writeFile('notes.txt',str,(err)=>{
            if(err){
                console.log(err);
            }
        });
    });
}

});

server.listen(9080,()=>{
    console.log('server is running on 9080');
});
