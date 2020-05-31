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
import { AccountType } from "./enums";

export class CheckingAccount extends BankAccount{
    
    // implementing the abstect
    accountType = AccountType.Checking;
    
    constructor(accountSettings:any){
        super(accountSettings);
        // other code here
    }
    
    getAccountInfo(){}
}

