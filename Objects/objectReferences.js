let account1 = {
  name: 'Rick Love',
  expenses: 0,
  income: 0,
};

// addExpense
let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
};

// addIncome
let addIncome = function (account, income) {
  account.income = account.income + income;
};

// resetAccount
let resetAccount = function (account) {
  account.expenses = 0;
  account.income = 0;
};

// getAccountSummary
let getAccountSummary = function (account) {
  let balance = account.income - account.expenses;

  return {
    summary: `${account.name} has ${account.expenses} in expenses and earns ${account.income}. The balance is ${balance}`,
  };
};

addExpense(account1, 2.65);
addExpense(account1, 3.23);
addIncome(account1, 234);
let summary = getAccountSummary(account1);
console.log(summary);
resetAccount(account1);
console.log(account1);
