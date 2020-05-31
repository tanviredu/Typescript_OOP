// export class CheckingAccount{
//     private _balance = 0;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { BankAccount } from "./bank_account";
import { AccountType } from "./enums";
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(accountSettings) {
        var _this = _super.call(this, accountSettings) || this;
        // implementing the abstect
        _this.accountType = AccountType.Checking;
        return _this;
        // other code here
    }
    return CheckingAccount;
}(BankAccount));
export { CheckingAccount };
//# sourceMappingURL=checking_account.js.map