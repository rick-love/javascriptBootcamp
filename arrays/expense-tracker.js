const account = {
  name: 'Rick',
  income: [],
  expenses: [],
  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount,
    });
  },
  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount,
    });
  },
  getAccountSummary: function () {
    let accountBalance = 0;
    let totalExpenses = 0;
    let totalIncome = 0;

    this.expenses.forEach((expense) => {
      console.log('Expense: ' + expense.amount);
      totalExpenses = totalExpenses + expense.amount;
    });
    this.income.forEach((income) => {
      console.log('Income: ' + income.amount);
      totalIncome = totalIncome + income.amount;
    });
    accountBalance = totalIncome - totalExpenses;

    return `${this.name} has a balance of ${accountBalance}. ${totalExpenses} in expenses and earned ${totalIncome}.`;
  },
  sortExpenses: function (expenses) {
    expenses.sort((a, b) => {
      if (a.description < b.description) {
        return -1;
      } else if (b.description < a.description) {
        return 1;
      } else {
        return 0;
      }
    });
  },
  sortIncome: function (income) {
    income.sort((a, b) => {
      if (a.description < b.description) {
        return -1;
      } else if (b.description < a.description) {
        return 1;
      } else {
        return 0;
      }
    });
  },
};

account.addExpense('Rent', 1130);
account.addExpense('Surf Camp', 550);
account.addExpense('Flight', 350);
account.addIncome('Salary', 3000);
account.addIncome('Consulting', 300);
console.log(account.getAccountSummary());
account.sortExpenses(account.expenses);
account.sortIncome(account.income);
console.log(account.expenses);
console.log(account.income);
