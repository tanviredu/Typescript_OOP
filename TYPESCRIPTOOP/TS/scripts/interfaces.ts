

// making this thing generic to accept
// different types
// insted of fixed types
export interface AccountInfo<TRouteNumber,TbankNumber>{
    routingNumber:TRouteNumber;
    bankNumber:TbankNumber;
}

export interface Depositwithdrawal{
    deposit(amount:number):void;
    withdrawal(amount:number):void;
}

export interface AccountSettings{
    id:number;
    title:string;
    balance:number;
    interestRate?:number;
    // now you can decide what you will pass
    // anything will be accepted
    accountInfo?:AccountInfo<string,number>;
}


// interface inheritance
// multiple inheritance
// now the class which is going to implemet 
// will have to maintain both requirment

export interface Account extends AccountSettings,Depositwithdrawal{}