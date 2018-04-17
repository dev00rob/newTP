var BankAccount = (function () {
    function BankAccount(o, b, t) {
        this.owner = o;
        this.balance = b;
        this.transactions = t;
    }
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    BankAccount.prototype.transact = function (n) {
        this.transactions.push(n);
        this.balance += n;
        return this.balance;
    };
    BankAccount.prototype.withdraw = function (n) {
        return this.transact(-n);
    };
    BankAccount.prototype.deposit = function (n) {
        return this.transact(n);
    };
    BankAccount.prototype.totalTransactions = function () {
        return this.transactions.length;
    };
    return BankAccount;
}());
var rothschild = new BankAccount("Sir MoneyBanks", 0, []);
console.log(rothschild.getBalance());
console.log(rothschild.deposit(500));
console.log(rothschild.withdraw(300));
console.log(rothschild.deposit(67890));
console.log(rothschild);
console.log("Number of transactions: ", rothschild.totalTransactions());
// this is a test 
