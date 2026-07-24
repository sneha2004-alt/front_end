const express = require('express');
require('dotenv').config();

const server = express();


const watchman =(req,res,next)=>{
    console.log('A');
    next();
    console.log('end');
};

server.use(watchman);

console.log('B');

server.get('/',(req,res)=>{
    console.log('C');
    res.send('hello server ✅');
    console.log('D');
});



server.get('/about',(req,res)=>{
    console.log('E');
    res.send('hello error ✅');
    console.log('F');
});




server.listen(process.env.Port,()=>{
    console.log(`Server is running on ${process.env.Port}`);
});