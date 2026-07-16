/*let date = new Data();
console.log(date);

date.setTime(date.getTime()+60*1000);

const expire=date.toUTCString();
console.log(date);

console.log(expire);
*/
/*1m => 60*1000 
1h =>60 * 60 * 1000 
24 => 24* 60 * 60 * 1000
7 = > 7 * 24 * 60 * 60 * 1000
*/


//utc =>universal time cordinnated
gmt => greenwich mean Time 
ist => india standard time  

/*document.cookie = `netflixtoken  = sneha;expires=$(expire)`;
document.cookie=`amozonToken=abc;expires=$(expire)`;*/

function name(){
    let name = 'sneha';
    return() => {
        let name ='Gupta';

        console.log(name);
    };
}

name()();