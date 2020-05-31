import {Depositwithdrawal} from './interfaces';
import {BankAccount} from './bank_account';

export class ATM implements Depositwithdrawal{
    constructor(private account:BankAccount){}
    
    deposit(amount: number): void {
        this.account.deposit(amount);
    }
    withdrawal(amount: number): void {
        this.account.withdrawal(amount);
    }
    
}