// abstraction //

/*
-accountNumber
-accountName
-accountPin

===========================

checkBalance
deposit
withdraw
changePin

*/

class Bank_Account{
    #pin;
    #amount;
    construction(name,pin,amount){
        ((this.name=name),
         (this.#pin = pin),
         (this.#amount = amount || 0),
         (this.accountNumber = Math.random(Math.random() + 1000000000000000000)+1));
    }

    /*set setAccountNumber(value){
    if(this.name && value === this.#Pi){
    let genAcc = Math.round(Math.random()*1000000000000000000)+1;
    
     this.accountNumber = genAcc;
     }else{
        console.log('pin not match???');
    }
}*/

/* get checkBalance(){
return this.#amount;
}*/

 checkBalance(value){
    if(value === this.#pin){
        return this.#amount;
    }
    return'incorrect pin'
}

       deposit(paisa,account){
    if(account ===this.accountNumber){
        console.log('xyz',this.#amount);
        this.#amount += paisa;
        return this.#amount;
    }else{
        return 'invalid account';
    }
  }
} 
let pin = 123;
  const acc_1 =new Bank_Account('sneha',pin);
  console.log(acc_1);
  let depositInfo = acc_1.deposit(2000,acc_1.accountNumber);
 console.log(depositInfo);