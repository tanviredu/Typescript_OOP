var CheckingAccount = /** @class */ (function () {
    function CheckingAccount(title) {
        this.title = title;
        this._balance = 0;
    }
    Object.defineProperty(CheckingAccount.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (val) {
            // filtering goes here
            this._balance = val;
        },
        enumerable: false,
        configurable: true
    });
    CheckingAccount.prototype.deposit = function (ammount) {
        this.balance += ammount;
    };
    CheckingAccount.prototype.withdrawal = function (ammount) {
        this.balance -= ammount;
    };
    return CheckingAccount;
}());
export { CheckingAccount };
//# sourceMappingURL=checking_account.js.map