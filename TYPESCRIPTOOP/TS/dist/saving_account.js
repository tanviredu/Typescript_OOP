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
import { BankAccount } from "./bank_account";
import { AccountType } from "./enums";
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    // add the constructor
    // and also feed the base constructor
    function SavingAccount(accountSettings) {
        var _this = _super.call(this, accountSettings) || this;
        _this.accountType = AccountType.Saving;
        // take the extra property
        _this._interestRate = accountSettings.interestRate;
        // every time this call will be called this function 
        // starts adding interst in 6 munites
        setInterval(function () {
            _this.addInterest();
        }, 6000);
        return _this;
    }
    // make a function that will add interest
    // and increase the balance
    SavingAccount.prototype.addInterest = function () {
        this.balance = this.balance + (this.balance * (this._interestRate / 100));
    };
    SavingAccount.prototype.getAccountInfo = function () {
    };
    return SavingAccount;
}(BankAccount));
export { SavingAccount };
//# sourceMappingURL=saving_account.js.map