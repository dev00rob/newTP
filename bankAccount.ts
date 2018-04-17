class BankAccount {
    owner: string;
    balance: number;
    transactions: number[];
    
    constructor(o: string, b: number, t: number[]){
        this.owner = o;
        this.balance = b;
        this.transactions = t;
    }
    
    getBalance():number{
        return this.balance;
    }
    
    transact(n: number):number{
        this.transactions.push(n);
        this.balance += n;
        return this.balance;
    }
    
    withdraw(n: number):number{
        return this.transact(-n);
    }
    
    deposit(n: number):number{
        return this.transact(n);
    }
    
    totalTransactions():number{
        return this.transactions.length;
    }
}

let rothschild = new BankAccount("Sir MoneyBanks", 0, []);
console.log(rothschild.getBalance());
console.log(rothschild.deposit(500));
console.log(rothschild.withdraw(300));
console.log(rothschild.deposit(67890));
console.log(rothschild);
console.log("Number of transactions: ", rothschild.totalTransactions());
