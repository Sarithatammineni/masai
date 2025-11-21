//Question -1

function createCounter() {
  let count = 0;

  return {
    increment: function() {
      count++;
      console.log("Current count:", count);
    },
    decrement: function() {
      count--;
      console.log("Current count:", count);
    },
    getCount: function() {
      return count;
    }
  };
}
const counter = createCounter();
counter.increment();
counter.increment(); 
counter.decrement(); 
console.log(counter.getCount()); 
const counterA = createCounter();
const counterB = createCounter();

counterA.increment(); 
counterA.increment(); 
counterB.increment(); 
console.log(counterA.getCount()); 
console.log(counterB.getCount()); 

//Question -2

function createBankAccount() {
  let balance = 0;
  let transactionHistory = [];

  return {
    deposit: function(amount) {
      balance += amount;
      transactionHistory.push(`Deposited: ${amount}`);
      console.log(`Deposited: ${amount}`);
    },
    withdraw: function(amount) {
      if (amount <= balance) {
        balance -= amount;
        transactionHistory.push(`Withdrawn: ${amount}`);
        console.log(`Withdrawn: ${amount}`);
      } else {
        transactionHistory.push(`Failed withdrawal: ${amount}`);
        console.log("Insufficient balance");
      }
    },
    getBalance: function() {
      return balance;
    },
    getTransactionHistory: function() {
      return [...transactionHistory]; 
    }
  };
}

const account = createBankAccount();
account.deposit(500);        
account.withdraw(200);         
account.withdraw(400);          
console.log(account.getBalance()); 
console.log(account.getTransactionHistory());
console.log(account.balance);   
