import {AccountType} from './enums';
import {Depositwithdrawal,Account,AccountSettings, AccountInfo} from "./interfaces"

import {Constants} from "./Constants";
export abstract class BankAccount implements Account{
    private _balance = 0;
    id:number;
    title:string;
    // if any abstratc class has abstract field and method
    // it must be implementd in the inherited class
    
    abstract accountType:AccountType;
    
    // constructor takes a json thats why any type
    constructor(accountSettings:AccountSettings){
        this.id = accountSettings.id;
        this.title = accountSettings.title;
        this.balance = accountSettings.balance;
    }
    
    
    // adding a abstract method definition
     getAccountInfo():AccountInfo<string,number>{
        return {
            routingNumber: Constants.ROUTING_NUMBER,
            bankNumber:Constants.BANKING_NUMBER
        }
    }
    
    // setting getter and setter for the 
    // account
    get balance(){
        return this._balance;
    }
    set balance(val : number){
        if (val >=0){
            this._balance = val;
        }else{
            throw Error("Balance cant be negative")
        }
 
    }
    deposit(amount:number){
        this.balance +=amount;
    }
    
    withdrawal(amount:number){
        this.balance -= amount;
    }
}