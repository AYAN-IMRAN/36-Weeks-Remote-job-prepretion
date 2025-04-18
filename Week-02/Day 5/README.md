
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

