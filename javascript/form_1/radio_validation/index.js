//const radioVAlue = documnet,querySelector("[name='content]");
///console.log(radioValue);

//const val = document.getElementsBytagName('input');
//console.log(val);

const handleSubmit=(e) =>{
    e.preventDefault();
    console.log('hello');
    const radioVal = document.myRadio.content;

    console.log(radioVal)

for(let i=0;i<radioVal.length;i++){
    if(radioVal[i].checked === true){
        document.querySelector('#output').innerHTML=`you are${radioVal[i].value}`;
        return true;
    }
}
document.querySelector('#output').innerHTML=`please select you'r gender!!`;

return false;
};