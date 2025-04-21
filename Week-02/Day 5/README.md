### ✅ `map()` — Transform Elements
**Short Definition**:  
Creates a **new array** by applying a function to **every element**.

🧠 **Key Points**:
- Original array **unchanged**
- Always returns **new array**
- Har element par function lagta hai

🔸 Example:
```js
[1, 2, 3].map(n => n * 2); // [2, 4, 6]
```

📌Map har item ko transform karta hai aur naya array return karta hai.

---

### ✅ `filter()` — Select Some Elements
**Short Definition**:  
Returns a **new array** with elements that **pass a condition** (true).

🧠 **Key Points**:
- Sirf woh elements jo condition pass karein
- Original array **safe**
- Returns new array, can be empty

🔸 Example:
```js
[5, 10, 15].filter(n => n > 7); // [10, 15]
```

📌Filter sirf woh items rakhta hai jo condition match karein.

---

### ✅ `sort()` — Sort Array In-place
**Short Definition**:  
**Sorts** the array items **in-place** (changes original array).

🧠 **Key Points**:
- Strings by default
- For numbers: use `(a, b) => a - b`
- Changes original array (⚠️ mutates)

🔸 Example:
```js
[5, 2, 8].sort((a, b) => a - b); // [2, 5, 8]
```

📌Sort array ko inplace arrange karta hai — number ke liye compare function zaroori hota hai.

### ✅ `find()` — Find First Match  
**Short Definition**:  
Returns the **first element** that satisfies a condition.

🧠 **Key Points**:
- Stops after first match (fast)
- Returns **value**, not array
- Returns `undefined` if not found

🔸 Example:
```js
[10, 15, 20].find(n => n > 12); // 15
```

📌Find sirf **pehla item** return karta hai jo condition pass kare. Na mile to `undefined`.

---

### ✅ `reduce()` — Reduce to One Value  
**Short Definition**:  
Processes all elements and returns **single value** (like sum, total, etc.)

🧠 **Key Points**:
- Takes **accumulator** and current value
- Can be used for sum, max, flatten, etc.
- Initial value optional but recommended

`reduce()` array ke **saare elements ko mila kar** ek hi value banata hai (total, average, string join, etc.)

---

### 🔸 Simple Example 1: Sum of Numbers
```js
let numbers = [1, 2, 3, 4];

let total = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(total); // 10
```

---

### 🧠 What’s Happening (Dry Run):

| Step | acc (Accumulator) | curr (Current value) | acc + curr |
|------|--------------------|----------------------|-------------|
| 1    | 0 (initial value)  | 1                    | 1           |
| 2    | 1                  | 2                    | 3           |
| 3    | 3                  | 3                    | 6           |
| 4    | 6                  | 4                    | 10          |

🔁 Final `acc` = **10**

---

### 📘
`reduce()` har element ko uthata hai, aur pehle wale result (accumulator) ke saath combine karta hai.  
Start 0 se kiya, phir 1+2+3+4 = 10 mil gaya.

---

### 🔸 Example 2: Multiply All Numbers
```js
let nums = [2, 3, 4];

let product = nums.reduce((acc, curr) => acc * curr, 1);

console.log(product); // 24
```

🧠 2 * 3 = 6 → 6 * 4 = 24

---

### 🔸 Example 3: Reduce Without Initial Value
```js
let nums = [5, 10, 15];

let total = nums.reduce((acc, curr) => acc + curr);

console.log(total); // 30
```

✅ JS automatically uses `5` as first `acc`, then starts from 10.

---

### 🔸 Real-World Example: Count Total Price
```js
let cart = [
  { item: "Book", price: 200 },
  { item: "Pen", price: 50 },
  { item: "Bag", price: 500 }
];

let total = cart.reduce((acc, product) => acc + product.price, 0);

console.log(total); // 750
```

## ✅ startsWith() — Check Beginning of Strings

### 🔹 Short Definition:
The `startsWith()` method checks if a string **starts with a specific substring**.

---

### 🧠 Key Points:
- Returns `true` or `false`
- Case-sensitive
- Often used in filtering or validation

---

### 🔸 Syntax:
```js
string.startsWith(searchString, position)
```
- `searchString`: The text to check
- `position` (optional): Where to start checking (default is 0)

---

### 🔍 Examples:

#### ✅ Basic Use:
```js
let word = "JavaScript";
console.log(word.startsWith("Java"));  // true
console.log(word.startsWith("java"));  // false (case-sensitive)
```

#### ✅ Filtering with startsWith:
```js
let fruits = ["apple", "banana", "apricot", "cherry"];
let aFruits = fruits.filter(fruit => fruit.startsWith("a"));

console.log(aFruits);  // ["apple", "apricot"]
```

📌 `startsWith()` aksar `filter()` ke sath use hota hai to find items starting with a specific letter or word.

---



---


## 📝 Summary

| Reduce | Meaning                       | Roman Urdu                                |
|--------|-------------------------------|--------------------------------------------|
| `acc`  | Accumulator (result so far)   | Ab tak ka result                           |
| `curr` | Current element in loop       | Is waqt ka item                            |
| `0`    | Starting value                | Shuruaat ka point (zaroori for safety)     |
| Output | One final value               | Aik final answer (total, string, array)    |

---

### ✅ `forEach()` — Loop Over Array  
**Short Definition**:  
Executes a function on **each element**, but does **not return anything**.

🧠 **Key Points**:
- No return (undefined)
- Only used for **side effects** (like console.log, update UI)
- Doesn't chain like `map`

🔸 Example:
```js
[1, 2, 3].forEach(n => console.log(n));
// Output: 1 2 3
```

📌ForEach sirf har element pe code chalata hai — koi naya array ya value return nahi karta.

---

## 📚 Quick Comparison Summary:

| Method     | Returns         | Changes Original? | Use For              |
|------------|------------------|--------------------|-----------------------|
| `map()`    | New array        | ❌ No              | Transform values      |
| `filter()` | New array        | ❌ No              | Select some values    |
| `find()`   | First match      | ❌ No              | Find one item         |
| `sort()`   | Same array       | ✅ Yes             | Sorting values        |
| `reduce()` | Single value     | ❌ No              | Total / combine       |
| `forEach()`| `undefined`      | ❌ No              | Loop with side effects|
| startsWith()  | String ke start ko check karta hai | `true`/`false` |

---



# ✅ Arrow Functions (`=>`) — Array Methods

## 🧠 What is an Arrow Function?
Arrow function is a **shorter syntax** to write functions in JavaScript. Introduced in ES6.

### 🔸 Syntax:
```js
const functionName = (parameters) => {
  // code
};
```

Or even shorter if only one expression:
```js
const add = (a, b) => a + b; // implicit return
```

## ✅ Differences: Arrow Function vs Regular Function

| Feature                  | Arrow Function         | Regular Function      |
|--------------------------|------------------------|------------------------|
| `this` context           | 🔒 Lexical (inherits from parent) | ✅ New `this` context |
| Syntax                   | Short & clean          | Longer                |
| Constructor (with `new`) | ❌ Not allowed          | ✅ Yes                 |
| Hoisting                | ❌ No (must be defined before use) | ✅ Yes (hoisted)    |

---

## ✅ Examples: Arrow in Action with Array Methods

---

### 🔹 Using `map()` with Arrow Function

```js
let numbers = [1, 2, 3];
let squares = numbers.map(n => n * n);
console.log(squares); // [1, 4, 9]
```

### 🔍 Dry Run:
- `n = 1` → `1 * 1 = 1`
- `n = 2` → `2 * 2 = 4`
- `n = 3` → `3 * 3 = 9`

🔁 **New array:** `[1, 4, 9]`

📝 Har element ko square kar ke new array ban gaya.

---

### 🔹 `filter()` with Arrow Function

```js
let ages = [16, 18, 20];
let adults = ages.filter(age => age >= 18);
console.log(adults); // [18, 20]
```

### 🔍 Dry Run:
- `age = 16` ❌ (skip)
- `age = 18` ✅
- `age = 20` ✅

🔁 **New array:** `[18, 20]`

---

### 🔹 `find()` with Arrow Function

```js
let users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
];

let user = users.find(u => u.name === "Sara");
console.log(user); // { id: 2, name: "Sara" }
```

### 🔍 Dry Run:
- First user: name is `"Ali"` ❌
- Second user: name is `"Sara"` ✅ → return that user

🔁 **Found:** `{ id: 2, name: "Sara" }`

---

### 🔹 `sort()` with Arrow Function

```js
let nums = [30, 2, 100];
nums.sort((a, b) => a - b);
console.log(nums); // [2, 30, 100]
```

### 🔍 Dry Run:
- Compare 30 and 2 → `30 - 2 = 28` → positive → swap
- Compare 2 and 100 → `2 - 100 = -98` → negative → no swap
- Keep comparing until sorted

---

## ✅ Arrow Function Examples with Parameters

### ➤ No parameter:
```js
let greet = () => console.log("Hello!");
greet();
```

### ➤ One parameter:
```js
let double = x => x * 2;
console.log(double(5)); // 10
```

### ➤ Multiple parameters:
```js
let add = (a, b) => a + b;
console.log(add(3, 4)); // 7
```

---

## 🚫 When **NOT** to Use Arrow Functions

### 1. **When you need `this` keyword:**
Arrow functions don’t have their own `this`.

```js
const obj = {
  name: "Ali",
  sayHi: function () {
    console.log(this.name); // works
  },
  sayHiArrow: () => {
    console.log(this.name); // undefined
  }
};
obj.sayHi();       // Ali
obj.sayHiArrow();  // undefined ❌
```

### 2. **As a constructor**:
```js
let Person = (name) => {
  this.name = name;
};
let p = new Person("Sara"); // ❌ TypeError
```

---

## 📌 Summary Table for Arrow Functions

| Feature             | Description                            |
|---------------------|----------------------------------------|
| Short Syntax        | Cleaner code for small functions       |
| No `this` binding   | Inherits from outer scope              |
| No `arguments` obj  | Use rest operator `(...args)` instead  |
| Best Used In        | Callbacks (map, filter, etc.), 1-liners|
| Not for             | Methods, constructors, `this`-dependent|

