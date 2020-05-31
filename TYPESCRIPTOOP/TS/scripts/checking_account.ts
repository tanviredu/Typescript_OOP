// export class CheckingAccount{
//     private _balance = 0;
    
//     constructor(public title:string){}

//     get balance(){ // get block
//         return this._balance;
//     }
    
//     set balance(val : number){ // set block
//         // filtering goes here
//         this._balance = val;
//     }
    
//     deposit(ammount:number){
//         this.balance +=ammount;
//     }
//     withdrawal(ammount:number){
//         this.balance -=ammount;
//     }

// }

import {BankAccount} from "./bank_account";

export class CheckingAccount extends BankAccount{
    
    constructor(accountSettings:any){
        super(accountSettings);
        // other code here
    }
}

