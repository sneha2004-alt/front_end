const express = require('express');

const Port =10000;

const  server = express();

server.use(express.json());
server.use(express.text());

server.get('/',(req,res)=> {
    console.log(req?.body);
    res.end();
});
server.post('/create',(req,res)=> {
    //console.log(req?.body);
    res.send(req?.body);
});

server.listen(Port,() => {
    console.log('this server is  running on ${Port}');

});