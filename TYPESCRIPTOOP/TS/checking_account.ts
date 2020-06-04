export class CheckingAccount{

	// setting up the private backing field
	private _balance:number = 0;  //this is private field

	// short format for the constructor
	// filed 
    constructor(public title:string){}

	// setting up getter and setter
	get balance(){
		return this._balance;
	} 

	set balance(val : number){
		this._balance = val;
	}

	// now if we want to use the 
	// setter we can use the this.balance
	// this will aumetically use the setter
	// although there is no property
	// name this.balance 

	deposit(ammount:number){
		this.balance +=ammount; // so this.balance is a getter 
	}

	withdrawl(ammount:number){
		this.balance -= ammount;
	}
}