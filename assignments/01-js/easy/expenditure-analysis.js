/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/


function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  for (let txn of transactions) {
    if (categoryTotals[txn.category]) {
      categoryTotals[txn.category] += txn.price;
    } else {
      categoryTotals[txn.category] = txn.price;
    }
  }

  const result = [];
  for (let category in categoryTotals) {
    result.push({ category: category, totalSpent: categoryTotals[category] });
  }

  return result;
  
}





if (require.main === module) {
  const transactions = [
    { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
    { id: 2, timestamp: 1656076800001, price: 15, category: 'Food', itemName: 'Burger' },
    { id: 3, timestamp: 1656076800002, price: 25, category: 'Clothing', itemName: 'Shirt' },
    { id: 4, timestamp: 1656076800003, price: 40, category: 'Electronics', itemName: 'Mouse' },
  ];

  console.log("Result:", calculateTotalSpentByCategory(transactions));
}

    
  

module.exports = calculateTotalSpentByCategory;


