const user = {
  name: "Vinicius",
  transactions: [],
  balance: 0
};
function createTransaction(transaction) {
  user.transactions.push(transaction);
  if (transaction.type === "credit") {
    user.balance += transaction.value;
    return user.balance;
  } else if (transaction.type === "debit") {
    user.balance -= transaction.value;
    return user.balance;
  }
}
createTransaction({
  type: "credit",
  value: 50
});
createTransaction({
  type: "credit",
  value: 120
});
createTransaction({
  type: "debit",
  value: 80
});
createTransaction({
  type: "debit",
  value: 30
});
function getCreditTransactions() {
  const transactionsCredit = [];
  for (let transaction of user.transactions) {
    if (transaction.type === "credit") {
      transactionsCredit.push(transaction);
      getTransactionsCount();
    }
  }
  return transactionsCredit;
}
function getDebitTransactions() {
  const transactionsDebit = [];
  for (let transaction of user.transactions) {
    if (transaction.type === "debit") {
      transactionsDebit.push(transaction);
      getTransactionsCount();
    }
  }
  return transactionsDebit;
}
function getHigherTransactionByType() {
  const transactionHigher = [];
  for (let transaction of user.transactions) {
    if (transaction.value > user.balance) {
      transactionHigher.push(transaction);
      getTransactionsCount();
    }
  }
  return transactionHigher;
}
function getAverageTransactionValue(all) {
  let count = 0;
  for (let transaction of user.transactions) {
    count = count + transaction.value;
  }
  const valueMedio = count / all;
  return valueMedio;
}
function getTransactionsCount() {
  let countDebit = 0;
  let countCredit = 0;
  for (let transaction of user.transactions) {
    if (transaction.type === "credit") {
      countCredit++;
    } else if (transaction.type === "debit") {
      countDebit++;
    }
  }
  const count = `credit: ${countCredit}, debit: ${countDebit}`;
  return count;
}
console.table(getCreditTransactions());
console.table(getDebitTransactions());
console.table(getHigherTransactionByType());
console.table(user);
console.log(getTransactionsCount());
console.log(`Balance: ${user.balance}`);
console.log(`Average: ${getAverageTransactionValue(user.transactions.length)}`);
