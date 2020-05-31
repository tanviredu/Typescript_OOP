var BankAccount = /** @class */ (function () {
    // constructor takes a json thats why any type
    function BankAccount(accountSettings) {
        this._balance = 0;
        this.id = accountSettings.id;
        this.title = accountSettings.title;
        this.balance = accountSettings.balance;
    }
    Object.defineProperty(BankAccount.prototype, "balance", {
        // setting getter and setter for the 
        // account
        get: function () {
            return this._balance;
        },
        set: function (val) {
            if (val >= 0) {
                this._balance = val;
            }
            else {
                throw Error("Balance cant be negative");
            }
        },
        enumerable: false,
        configurable: true
    });
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdrawal = function (amount) {
        this.balance -= amount;
    };
    return BankAccount;
}());
export { BankAccount };
//# sourceMappingURL=bank_account.js.map