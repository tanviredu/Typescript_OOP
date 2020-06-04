export var Utility;
(function (Utility) {
    var fees;
    (function (fees) {
        function calculateLateFee(daysLate) {
            return daysLate * .25;
        }
        fees.calculateLateFee = calculateLateFee;
    })(fees = Utility.fees || (Utility.fees = {}));
    function MaxBooksAllowed(age) {
        if (age < 12) {
            return 3;
        }
        else {
            return 10;
        }
    }
    Utility.MaxBooksAllowed = MaxBooksAllowed;
    function Purge(inventory) {
        return inventory.splice(2, inventory.length);
    }
})(Utility || (Utility = {}));
//# sourceMappingURL=utilityClass.js.map