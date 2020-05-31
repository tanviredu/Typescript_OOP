import {AccountType} from './enums';

export abstract class BankAccount{
    private _balance = 0;
    id:number;
    title:string;
    // if any abstratc class has abstract field and method
    // it must be implementd in the inherited class
    
    abstract accountType:AccountType;
    
    // constructor takes a json thats why any type
    constructor(accountSettings:any){
        this.id = accountSettings.id;
        this.title = accountSettings.title;
        this.balance = accountSettings.balance;
    }
    
    
    // adding a abstract method definition
    abstract getAccountInfo():any;
    
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