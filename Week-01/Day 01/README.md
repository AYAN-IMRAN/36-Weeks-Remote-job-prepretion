# 🚀 WEEK 01 - Remote Job Preparation 📚

## 🌟 **Week 1.1 | JS Foundations** 💻

Welcome to the first week of your preparation journey! Let's dive into the foundational topics of **JavaScript** and the core concepts that make it one of the most popular programming languages. 🌐

---

### 💡 **Why Languages?** 🤔
- **Languages** are essential for communication, whether human or programming. 🌍
- **Human Languages**: Enable cultural exchange, cognitive development, and global understanding. 🌏
- **Programming Languages**: Allow us to communicate with computers, giving us the ability to solve complex problems, automate tasks, and improve efficiency. 🖥️

---

### 🔄 **Interpreted vs Compiled Languages** ⚙️

#### 🔍 **Interpreter**:
- Executes instructions **line-by-line** during runtime.
- Translates code into machine-readable instructions directly. 
- No need for prior compilation.

#### 🛠️ **Compiler**:
- Translates entire programs into machine code **before execution**.
- **Example**: C++ compiler turns your code into machine-readable code.
  
#### 📊 **Key Difference**:
- **Interpreter**: Translates and executes code line-by-line.
- **Compiler**: Translates the entire code before execution.

---

![Compiler vs Interpreter](https://www.ankitweblogic.com/c/c_img/compiler.png)

---

### 🔥 **Why JS >> Other Languages?** 🌐

JavaScript reigns supreme in web development for several reasons:

1. **🌍 Ubiquity in Web Development**: It's everywhere, from front-end to back-end.
2. **🖥️ Full-Stack Development**: JS powers both client and server-side.
3. **📚 Learning Curve**: Easier to learn and apply compared to many other languages.
4. **💼 Industry Demand**: High demand for JavaScript developers across the world.
5. **🔗 Interoperability**: Works well with other technologies and tools.

#### **Comparison**:

- **Python**: Doesn't have native browser support.
- **Java**: Slower for front-end development compared to JS.
- **C/C++**: Great for performance, but not designed for web development.

---

![Why JavaScript?](https://a.ilovecoding.org/img/why-javascript/compare-lang-capability.jpg)

---

### 🏗️ **Strict vs Dynamic Languages** 📐

#### 🔒 **Strict (Statically Typed)**:
- **Type Checking** happens at compile time.
- **Early Error Detection**.
- **Examples**: C++, Java, C#

#### 🌀 **Dynamic (Non-Strict)**:
- **Type Checking** happens at runtime.
- **Late Error Detection**.
- **Examples**: JavaScript, Python, Ruby

---

### 🧵 **Single-Threaded Nature of JavaScript** 🕸️

JavaScript is **single-threaded**, which means it can only execute **one task at a time**. This allows JS to be lightweight and perform efficiently, particularly in web environments.

---

![Single-Threaded](https://miro.medium.com/v2/resize:fit:1400/0*1j7cOVyvjy8a2Omu.png)

---





## 1- Variable in JavaScript:

A **variable** is a container for storing data values. In JavaScript, variables are declared using the keywords `var`, `let`, and `const`. However, in modern JavaScript, it is recommended to use `let` and `const`.

```javascript
var name = "Ayan"; // Old way of declaring a variable

let age = 20; // Declaring with let
const ID = 9352; // Declaring with const
```

> **Tip:** Stick to `let` and `const` in modern JavaScript. Use `const` by default unless you know the value needs to change, in which case use `let`. Avoid `var` unless you're working with old code.

- **Explanation:**
In JavaScript, we use `let` to declare a variable whose value can be changed, and `const` to declare a constant that cannot be reassigned after initialization. In the example, the variable `age` stores a number, and the constant `name` stores the string "Ayan."
**Scope:**

In JavaScript, scope refers to the context in which a variable is accessible. There are three main types of scope:

1. **Global Scope**: A variable declared outside any function is globally scoped and accessible anywhere in the code.
2. **Function Scope**: A variable declared inside a function is only accessible within that function.
3. **Block Scope**: A variable declared inside a block (like an `if` statement or loop) is only accessible within that block. Variables declared with `let` and `const` have block scope.

### Difference Between `var`, `let`, and `const`:

- `var`: Function-scoped, allows reassignment and redeclaration.
- `let`: Block-scoped, allows reassignment but no redeclaration within the same scope.
- `const`: Block-scoped, does not allow reassignment.

---
### 2. **Loops**

A **loop** in JavaScript is used to repeat a block of code multiple times. There are different types of loops in JavaScript, such as the `for` loop and `while` loop.

- **For Loop:**

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i); // Prints numbers 0 to 4
}
```

- **Explanation:**
The `for` loop starts with `i = 0` and runs until `i` is less than 5. On each iteration, `i` is incremented by 1. This is why it prints the numbers 0 through 4.

- **While Loop:**

```javascript
let i = 0;
while (i < 5) {
    console.log(i); // Prints numbers 0 to 4
    i++;
}
```

- **Explanation:**
In the `while` loop, we define a condition (`i < 5`), and as long as the condition is true, the code inside the loop will execute. The value of `i` is incremented after each iteration.

### 3. **Conditions (If-Else)**

**Conditions** help you make decisions in your code. The `if-else` statement is used to run certain code if a condition is true, and different code if the condition is false.

```javascript
let age = 17;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
```

- **Explanation:**
Here, we check if `age` is greater than or equal to 18. If the condition is true, it prints "You are an adult." If false, it prints "You are a minor."

### 4. **Arrays**

An **array** is a collection of items that are stored in a single variable. Arrays are ordered, and each item is accessed by its index.

```javascript
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // Prints "apple"
```

- **Explanation:**
The `fruits` array contains three items. The first item, "apple", is accessed by its index `[0]`.

### 5. **Functions**

A **function** is a reusable block of code that performs a specific task. Functions can accept parameters and return values.



```javascript
function greet(name) {
    console.log("Hello, " + name);
}

greet("Ayan"); // Prints "Hello, Ayan"
```

- **Explanation:**
Here, we define a function called `greet` that accepts a parameter `name` and prints a greeting message. When we call `greet("Ayan")`, it prints "Hello, Ayan."

---


## Data Types:

# **Primitive and Non-Primitive Example**

![Example Image](https://i.ytimg.com/vi/LvhtKUXAK34/sddefault.jpg)

JavaScript has **primitive** and **non-primitive** data types.

1. **Primitive Types**: These represent single values and are immutable. 
    - **Number**: For numbers (integers and decimals).
    - **String**: For text, enclosed in single quotes (`'`), double quotes (`"`), or backticks (`` ` ``).
    - **Boolean**: Represents `true` or `false`.
    - **Undefined**: A variable declared but not yet assigned a value.
    - **Null**: Represents a null or empty value.
    - **Symbol**: A unique identifier often used for object keys.
    - **BigInt**: For representing large integers.

2. **Non-Primitive Types**: These are more complex data types.
    - **Array**: A list of values, ordered by index.
    - **Object**: A collection of key-value pairs (similar to dictionaries in other languages).
    - **Function**: Code that can be invoked.

## Type Coercion:

JavaScript will automatically convert types when necessary. This is called **type coercion**.

```javascript
console.log("5" + 3); // "53" (string concatenation)
console.log("5" - 3); // 2 (converts to number)
```

### Type Conversion:

You can manually control type conversion in JavaScript using methods like `String()`, `Number()`, and `Boolean()`.

```javascript
let num = 42;
let str = String(num); // "42"
let num2 = Number(str); // 42

let truthy = Boolean(""); // false
let falsy = Boolean("hello"); // true
```

### `typeof` Operator:

The `typeof` operator is used to check the type of a variable.

```javascript
console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof undefined); // "undefined"
```

---





<br>


# JavaScript Operators

JavaScript operators are special symbols that perform operations on one or more operands (values). For example:

```javascript
2 + 3;  // 5
```

Here, we used the `+` operator to add the operands 2 and 3.

## JavaScript Operator Types

Here is a list of different JavaScript operators :

- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- Logical Operators
- Bitwise Operators
- String Operators
- Miscellaneous Operators

### 1. JavaScript Arithmetic Operators

We use arithmetic operators to perform arithmetic calculations like addition, subtraction, etc. For example:

```javascript
5 - 3;  // 2
```

Here, we used the `-` operator to subtract 3 from 5.

#### Commonly Used Arithmetic Operators

| Operator | Name                | Example         |
|----------|---------------------|-----------------|
| `+`      | Addition            | `3 + 4`         |  // 7 |
| `-`      | Subtraction         | `5 - 3`         |  // 2 |
| `*`      | Multiplication      | `2 * 3`         |  // 6 |
| `/`      | Division            | `4 / 2`         |  // 2 |
| `%`      | Remainder           | `5 % 2`         |  // 1 |
| `++`     | Increment (by 1)    | `++5` or `5++`  |  // 6 |
| `--`     | Decrement (by 1)    | `--4` or `4--`  |  // 3 |
| `**`     | Exponentiation      | `4 ** 2`        |  // 16 |

#### Example 1: Arithmetic Operators in JavaScript

```javascript
let x = 5;

// addition operator
console.log("Addition: x + 3 = ", x + 3);

// subtraction operator
console.log("Subtraction: x - 3 =", x - 3);

// multiplication operator
console.log("Multiplication: x * 3 =", x * 3);

// division operator
console.log("Division: x / 3 =", x / 3);

// remainder operator
console.log("Remainder: x % 3 =", x % 3);

// increment operator
console.log("Increment: ++x =", ++x);

// decrement operator
console.log("Decrement: --x =", --x);

// exponentiation operator
console.log("Exponentiation: x ** 3 =", x ** 3);
```

#### Output

```
Addition: x + 3 =  8
Subtraction: x - 3 = 2
Multiplication: x * 3 = 15
Division: x / 3 = 1.6666666666666667
Remainder: x % 3 = 2
Increment: ++x = 6
Decrement: --x = 5
Exponentiation: x ** 3 = 125
```

**Note:** The increment operator `++` adds 1 to the operand. And, the decrement operator `--` decreases the value of the operand by 1.



### 2. JavaScript Assignment Operators

We use assignment operators to assign values to variables. For example:

```javascript
let x = 5;
```

Here, we used the `=` operator to assign the value 5 to the variable `x`.

#### Commonly Used Assignment Operators

| Operator | Name                      | Example         |
|----------|---------------------------|-----------------|
| `=`      | Assignment Operator        | `a = 7;`        |
| `+=`     | Addition Assignment        | `a += 5;`       |  // a = a + 5 |
| `-=`     | Subtraction Assignment     | `a -= 2;`       |  // a = a - 2 |
| `*=`     | Multiplication Assignment  | `a *= 3;`       |  // a = a * 3 |
| `/=`     | Division Assignment        | `a /= 2;`       |  // a = a / 2 |
| `%=`     | Remainder Assignment       | `a %= 2;`       |  // a = a % 2 |
| `**=`    | Exponentiation Assignment  | `a **= 2;`      |  // a = a**2 |

#### Example 2: Assignment Operators in JavaScript

```javascript
// assignment operator
let a = 7;
console.log("Assignment: a = 7, a =", a);

// addition assignment operator
a += 5;  // a = a + 5
console.log("Addition Assignment: a += 5, a =", a);

// subtraction assignment operator
a -= 5;  // a = a - 5
console.log("Subtraction Assignment: a -= 5, a =", a);

// multiplication assignment operator
a *= 2;  // a = a * 2
console.log("Multiplication Assignment: a *= 2, a =", a);

// division assignment operator
a /= 2;  // a = a / 2
console.log("Division Assignment: a /= 2, a =", a);

// remainder assignment operator
a %= 2;  // a = a % 2
console.log("Remainder Assignment: a %= 2, a =", a);

// exponentiation assignment operator
a **= 2;  // a = a**2
console.log("Exponentiation Assignment: a **= 7, a =", a);
```

#### Output

```
Assignment: a = 7, a = 7
Addition Assignment: a += 5, a = 12
Subtraction Assignment: a -= 5, a = 7
Multiplication Assignment: a *= 2, a = 14
Division Assignment: a /= 2, a = 7
Remainder Assignment: a %= 2, a = 1
Exponentiation Assignment: a **= 7, a = 1
```

### 3. JavaScript Comparison Operators

We use comparison operators to compare two values and return a boolean value (`true` or `false`). For example:

```javascript
const a = 3, b = 2;
console.log(a > b);
```

#### Output: `true`

Here, we have used the `>` comparison operator to check whether `a` (whose value is 3) is greater than `b` (whose value is 2).

Since 3 is greater than 2, we get `true` as output.

**Note:** In the above example, `a > b` is called a boolean expression since evaluating it results in a boolean value.

#### Commonly Used Comparison Operators

| Operator | Meaning                          | Example                    |
|----------|----------------------------------|----------------------------|
| `==`     | Equal to                         | `3 == 5` gives us `false`  |
| `!=`     | Not equal to                     | `3 != 4` gives us `true`   |
| `>`      | Greater than                     | `4 > 4` gives us `false`   |
| `<`      | Less than                        | `3 < 3` gives us `false`   |
| `>=`     | Greater than or equal to         | `4 >= 4` gives us `true`   |
| `<=`     | Less than or equal to            | `3 <= 3` gives us `true`   |
| `===`    | Strictly equal to                | `3 === "3"` gives us `false` |
| `!==`    | Strictly not equal to            | `3 !== "3"` gives us `true` |

#### Example 3: Comparison Operators in JavaScript

```javascript
// equal to operator
console.log("Equal to: 2 == 2 is", 2 == 2);

// not equal operator
console.log("Not equal to: 3 != 3 is", 3 != 3);

// strictly equal to operator
console.log("Strictly equal to: 2 === '2' is", 2 === '2');

// strictly not equal to operator
console.log("Strictly not equal to: 2 !== '2' is", 2 !== '2');

// greater than operator
console.log("Greater than: 3 > 3 is", 3 > 3);

// less than operator
console.log("Less than: 2 > 2 is", 2 > 2);

// greater than or equal to operator
console.log("Greater than or equal to: 3 >= 3 is", 3 >= 3);

// less than or equal to operator
console.log("Less than or equal to: 2 <= 2 is", 2 <= 2);
```

#### Output

```
Equal to: 2 == 2 is true
Not equal to: 3 != 3 is false
Strictly equal to: 2 === '2' is false
Strictly not equal to: 2 !== '2' is true
Greater than: 3 > 3 is false
Less than: 2 > 2 is false
Greater than or equal to: 3 >= 3 is true
Less than or equal to: 2 <= 2 is true
```

Difference between equality (`==` and `!=`) and strict equality (`===` and `!==`)<br>
=== is campair value with type .


Importants points 

**JavaScript Key Concepts with Code Examples**

**1. var, let, and const Differences**

- **Scope**:
  - `var` is function-scoped or globally scoped if declared outside a function.
  - `let` and `const` are block-scoped, confined within the nearest set of curly braces.

- **Hoisting**:
  - `var` declarations are hoisted and initialized with `undefined`.
  - `let` and `const` are hoisted but remain uninitialized, leading to a Temporal Dead Zone (TDZ) if accessed before declaration.

- **Re-declaration and Assignment**:
  - `var` allows re-declaration and reassignment.
  - `let` permits reassignment but not re-declaration within the same scope.
  - `const` neither allows re-declaration nor reassignment; it defines a constant reference.

**Code Example**:


```javascript
function testScopes() {
  if (true) {
    var x = 10; // Function-scoped
    let y = 20; // Block-scoped
    const z = 30; // Block-scoped
  }
  console.log(x); // Outputs: 10
  console.log(y); // ReferenceError: y is not defined
  console.log(z); // ReferenceError: z is not defined
}
testScopes();
```


**2. Window Object**

In browsers, the `window` object represents the global execution context. Variables and functions declared globally are properties and methods of the `window` object.

**Code Example**:


```javascript
var globalVar = "I am global";
console.log(window.globalVar); // Outputs: I am global
```


**3. Browser Context API**

The Browser Context API allows interaction with the browser's environment, including accessing the DOM, handling events, and managing browser-specific features.

**4. Stack and Heap Memory**

- **Stack**: Stores primitive data types and function call frames; operates in a Last In First Out (LIFO) manner.
- **Heap**: Manages dynamic memory allocation for objects and arrays; allows for flexible memory usage.

**5. Execution Context**

An execution context is the environment in which JavaScript code is evaluated and executed. There are three types:

- **Global Execution Context**: The default context where any JavaScript code runs.
- **Function Execution Context**: Created when a function is invoked, containing its own scope and variables.
- **Eval Execution Context**: Code executed inside an `eval()` function, though its use is generally discouraged.

**6. Lexical Environment**

A lexical environment consists of the environment record (which holds variable and function declarations) and a reference to the outer lexical environment. It determines the scope and accessibility of variables.

**7. Copying Reference Values**

When assigning objects or arrays, JavaScript copies the reference, not the actual data. Modifying one affects the other.

**Code Example**:


```javascript
let obj1 = { name: "Alice" };
let obj2 = obj1; // obj2 references obj1
obj2.name = "Bob";
console.log(obj1.name); // Outputs: Bob
```


**8. Truthy vs. Falsy**

In JavaScript, values are evaluated as true or false in boolean contexts. Falsy values include:

- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

All other values are considered truthy.

**9. Switch Case**

The `switch` statement evaluates an expression and matches its value against multiple `case` clauses, executing the corresponding block of code.

**Code Example**:


```javascript
let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("Apple is selected.");
    break;
  case "banana":
    console.log("Banana is selected.");
    break;
  default:
    console.log("No fruit selected.");
}
```


**10. ForEach Loop**

The `forEach` method executes a provided function once for each array element.

**Code Example**:


```javascript
let numbers = [1, 2, 3];
numbers.forEach(function(number) {
  console.log(number * 2);
});
```


**11. For-in Loop**

The `for-in` loop iterates over the enumerable properties of an object.

**Code Example**:


```javascript
let person = { name: "Alice", age: 30 };
for (let key in person) {
  console.log(key + ": " + person[key]);
}
```


**12. Do-While Loop**

The `do-while` loop executes a block of code once before checking the condition, then repeats the loop as long as the condition evaluates to true.

**Code Example**:


```javascript
let count = 0;
do {
  console.log(count);
  count++;
} while (count < 3);
```


**13. Callback Function**

A callback function is a function passed into another function as an argument, to be executed later.

**Code Example**:


```javascript
function fetchData(callback) {
  setTimeout(function() {
    let data = "Data fetched";
    callback(data);
  }, 1000);
}

fetchData(function(result) {
  console.log(result); // Outputs: Data fetched
});
```


Absolutely! Here's the full section for **14. First-Class Functions**, formatted neatly with explanations and examples:

---

### **14. First-Class Functions** 🚀

In JavaScript, **functions are first-class citizens**. This means that functions are treated like any other value in the language — they can be:

- **Assigned to variables**
- **Passed as arguments to other functions**
- **Returned from other functions**
- **Stored in data structures (like arrays or objects)**

This is one of the most powerful features of JavaScript and forms the basis for **functional programming** and concepts like **callbacks**, **higher-order functions**, and **closures**.

---

#### 🔸 **Assigning a Function to a Variable**

```javascript
const greet = function(name) {
  return "Hello, " + name;
};

console.log(greet("Ayan")); // Output: Hello, Ayan
```

- Here, the function is **anonymous** (it has no name) and is assigned to a variable `greet`.
- You can now use `greet` like any other function.

---

# 🧠 What is Hoisting?

> JavaScript code run hone se pehle, **variables aur functions ko upar le jata hai (hoist karta hai)**.  
> Lekin **`var`, `let`, `const` alag behave karte hain**.

---

## ✅ `var` Hoisting — Allowed, but gives `undefined`

```js
console.log(a);  // ✅ Output: undefined
var a = 10;
console.log(a);  // ✅ Output: 10
```

### 📘 Easy Explanation:
- JS `var a;` ko top pe le gaya (hoist kiya).
- Pehle `a` ki value `undefined` thi.
- Baad me `a = 10;` assign hua.

---

## 🚫 `let` Hoisting — Hoist hota hai, **lekin access se pehle error deta hai**

```js
console.log(b);  // ❌ Error: Cannot access 'b' before initialization
let b = 20;
```

### 📘 Easy Explanation:
- JS `let b;` ko memory me le gaya, lekin **TDZ (Temporal Dead Zone)** me rakha.
- Jab tak `let b = 20;` nahi aata, tab tak **use nahi kar sakte**.

---

## 🚫 `const` Hoisting — Same as `let`, but also needs a value

```js
console.log(c);  // ❌ Error: Cannot access 'c' before initialization
const c = 30;
```

### 📘 Extra Point:
- `const` ko declare aur assign **ek saath karna hota hai**.
- Warna error deta hai.

---

## ✅ Function Declaration Hoisting — Pehle call karna allowed

```js
greet(); // ✅ Output: Hello!

function greet() {
  console.log("Hello!");
}
```

### 📘 Explanation:
- JS ne **poori function** ko top pe le gaya.
- Isliye pehle call karna bhi chal gaya.

---

## 🚫 Function Expression with `var` — Gives `TypeError`

```js
sayHi(); // ❌ Output: TypeError: sayHi is not a function

var sayHi = function () {
  console.log("Hi!");
};
```

### 📘 Explanation:
- `var sayHi;` upar chala gaya, so `sayHi` = `undefined`
- Jab hum `sayHi()` likhte hain, wo `undefined()` ban jata hai ⇒ error

---

## 🚫 Function Expression with `let` — Gives `ReferenceError`

```js
sayHello(); // ❌ Output: ReferenceError: Cannot access 'sayHello' before initialization

let sayHello = function () {
  console.log("Hello!");
};
```

---

## ✅ Summary Table

| Code Type               | Hoisted? | Output if used before line | Error? Type               |
|-------------------------|----------|-----------------------------|---------------------------|
| `var x`                 | ✅ Yes   | `undefined`                 | ❌ No                     |
| `let x`                 | ✅ Yes   | ❌ ReferenceError           | ✅ TDZ (Temporal Dead Zone) |
| `const x`               | ✅ Yes   | ❌ ReferenceError           | ✅ Must initialize         |
| `function func()`       | ✅ Yes   | ✅ Works (full hoisted)     | ❌ No                     |
| `var func = function()` | ⚠️ Yes   | ❌ TypeError                | ✅ Yes                    |
| `let/const func = () =>`| ✅ Yes   | ❌ ReferenceError           | ✅ TDZ                    |

---

## 🧠 Summary:

> JavaScript pehlay sab kuch declare karta hai (hoist), lekin:
- `var` ka value undefined hoti hai pehlay
- `let` aur `const` memory me hote hain but access nahi kar sakte — error deta hai
- Full `function()` hoist hoti hai
- Function expressions hoist nahi hoti (ya undefined hoti hain)

---


