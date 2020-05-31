import { BankAccount } from "./bank_account";
import {AccountType} from "./enums";

export class SavingAccount extends BankAccount{
    private _interestRate:number;
    accountType : AccountType= AccountType.Saving;
    
    // add the constructor
    // and also feed the base constructor
    constructor(accountSettings:any){
        super(accountSettings);
        
        // take the extra property
        this._interestRate = accountSettings.interestRate;
        
        // every time this call will be called this function 
        // starts adding interst in 6 munites
        setInterval(()=>{
            this.addInterest();
        },6000);
        
    }
    
    
    // make a function that will add interest
    // and increase the balance
    private addInterest(){
        this.balance = this.balance + (this.balance*(this._interestRate/100));
    }
    
    getAccountInfo(){
        
    }
}