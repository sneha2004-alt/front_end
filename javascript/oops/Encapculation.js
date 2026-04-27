class Account{
    #url;//private variable define 
    #age;
    constructor(name,url,age){
        ((this.name = name),(this.#url),(this.#age = age));
    }}

    const p1 = new Account('mehfooz','http://img.com/men',2000);
    console.log(p1);