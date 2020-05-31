// import the class
import {CheckingAccount} from './checking_account'
import {Renderer} from './renderer'

class main{
    checkingAccount:CheckingAccount;
    
    constructor(private renderer:Renderer){
        this.checkingAccount = new CheckingAccount("Tanvir Rahman");
        this.renderAccount();
    }
    renderAccount(){
        
        return "";
    }
    
    depositWithDrawl(deposit:boolean){
        
        return "";
    }
    
    
}