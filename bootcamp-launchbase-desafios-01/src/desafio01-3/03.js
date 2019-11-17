const users = [
  {
    name: "Salvio",
    recipes: [115.3],
    expenses: [85.3]
  },
  {
    name: "Marcio",
    recipes: [24.6],
    expenses: [185.3]
  },
  {
    name: "Lucia",
    recipes: [450.3],
    expenses: [450.3]
  }
];
for (let user of users) {
  calculateBalance(user, user.recipes, user.expenses);
}
function calculateBalance(user, recipes, expenses) {
  const recipe = calculateNumbers(recipes);
  const expense = calculateNumbers(expenses);
  const balance = recipe - expense;
  if (balance > 0) {
    console.log(
      `User ${user.name} has a positive balance of ${balance.toFixed(2)}`
    );
  } else if (balance < 0) {
    console.log(
      `User ${user.name} has no positive balance of ${balance.toFixed(2)}`
    );
  } else {
    console.log(`User ${user.name} has no balance`);
  }
}

function calculateNumbers(numbers) {
  let number = 0;
  for (let i = 0; i < numbers.length; i++) {
    number += numbers[i];
  }
  return number;
}
