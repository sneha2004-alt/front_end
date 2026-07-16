import axios from 'axios';

async function apicall(){
    let data = await axios.get('https://jsonplaceholder.typicode.com/users');

    let res = await data.data;
    console.log(res);
}

apicall();