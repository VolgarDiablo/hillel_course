class BankAccount {
  #balance;

  constructor(balance) {
    this.#balance = balance;
  }

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    } else {
      console.log("The deposit amount must be greater than 0");
    }
  }

  withdraw(amount) {
    if (amount > 0) {
      if (amount <= this.#balance) {
        this.#balance -= amount;
      } else {
        console.log("There are insufficient funds in the account");
      }
    } else {
      console.log("The withdrawal amount must be greater than 0");
    }
  }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300
