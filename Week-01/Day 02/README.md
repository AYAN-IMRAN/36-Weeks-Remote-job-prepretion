
# Week 1.2 | Basic JS APIs (Beginners)

## 📅 Day 02  
### 🔹 Introduction

An **API** (Application Programming Interface) is a set of rules and protocols that allow different software components to communicate. APIs enable applications to:
- Request and exchange data
- Invoke functions from other services
- Utilize features provided by external systems

In this session, we’ll explore some **built-in JavaScript array methods** that work like mini APIs: `map()`, `filter()`, `find()`, and `sort()`.

---

## ✅ `map()` — Transforms Every Element

The `map()` method creates a **new array** by applying a given function to **each element** of the original array.

### 🔸 Example:
```javascript
let numbers = [1, 2, 3, 4];
let square = numbers.map(num => num * num);
console.log(square); // [1, 4, 9, 16]
```

**💡 Explanation:**  
`map()` takes every number and applies a transformation (in this case, squaring it). The original array remains unchanged.

---

## ✅ `filter()` — Filters Some Elements

The `filter()` method returns a **new array** containing only those elements that pass a specific condition.

### 🔸 Example:
```javascript
let ages = [12, 17, 20, 25];
let adults = ages.filter(age => age >= 18);
console.log(adults); // [20, 25]
```

**💡 Explanation:**  
This filters out the elements where the condition `age >= 18` is `true`.

---

## ✅ `find()` — Finds the First Match

The `find()` method returns the **first element** that satisfies a condition. If none are found, it returns `undefined`.

### 🔸 Example:
```javascript
let users = [
  { id: 1, name: "Ayan" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Sara" }
];

let user = users.find(u => u.name === "Ali");
console.log(user); // { id: 2, name: "Ali" }
```

**💡 Explanation:**  
Only the **first** matching user object with name `"Ali"` is returned.

---

## ✅ `sort()` — Sorts the Array

The `sort()` method arranges the elements of an array **in place**. By default, it sorts values **as strings**, which can cause issues with numbers.

### 🔸 Example 1: Sorting Strings
```javascript
let fruits = ["banana", "apple", "mango"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "mango"]
```


## 📌 Summary Table

| Method     | Description                                   | Returns                   | Mutates Original? |
|------------|-----------------------------------------------|----------------------------|--------------------|
| `map()`    | Transforms each element in an array           | ✅ New array               | ❌ No              |
| `filter()` | Keeps only elements that match a condition    | ✅ New array               | ❌ No              |
| `find()`   | Returns the **first** matching element        | ✅ Value / Object          | ❌ No              |
| `sort()`   | Sorts array alphabetically or numerically     | ✅ Sorted (same) array     | ✅ Yes             |



### 🚗 Understanding Classes in JavaScript (with Example)

```javascript
// A class is like a template or blueprint that we can create once and reuse multiple times.
class Makeniq {
    // The constructor is a special function that gets called automatically
    // whenever we create a new object using the class.
    // It receives values (called parameters) so that each object can have its own unique data.
    constructor(engine, color, model) {
        this.engine = engine;  // Stores the value of engine in the object's 'engine' property.
        this.color = color;    // Stores the value of color in the object's 'color' property.
        this.model = model;    // Stores the value of model in the object's 'model' property.
    }

    // The display method is used to print the object's details in the console.
    display() {
        // Using template literals to display the car's details in a clean, readable format.
        console.log(`This car has a ${this.color} ${this.model} with a ${this.engine}`);
    }

    // With the constructor and methods, we can easily create multiple car objects,
    // each having their own unique properties.
    // This way, we avoid writing the same code again and again.
}

// Creating new objects from the 'Makeniq' class by passing engine, color, and model values.
let car1 = new Makeniq("HONDA ENGINE", "Black Color", 2025);
let car2 = new Makeniq("BMW ENGINE", "White Color", 2025);

// Now we're printing the car1 and car2 objects in the console.
console.log(car1);
console.log(car2);

// If we want, we can also call the 'display' method to view car details in a nice format.
car1.display(); 
car2.display(); 
```

---

### 💡 Summary:
- A **class** is a reusable structure for creating multiple objects.
- The **constructor** is where we pass values to set each object’s unique properties.
- The **`this`** keyword refers to the current object being created.
- The **`display()` method** lets us print object data in a readable format.
- This makes our code more **organized**, **reusable**, and **clean**.




# JavaScript Objects

JavaScript is designed on an **object-based paradigm**, meaning much of the language is built around the concept of *objects*.

An **object** in JavaScript is a collection of **properties**, where each property is defined as a key-value pair. If the value of a property is a function, it is referred to as a **method**.

---

## 📌 Key Points about JavaScript Objects

- An **object** is created using `{}` (curly braces).
- A **property** is a key-value pair.
- Keys (also called property names) are always strings or symbols.
- Values can be of any type — string, number, boolean, array, function, even another object.
- Methods are functions stored as object properties.
- Objects can also be created using constructor functions or classes.

---

## 🧱 Basic Object Structure

```js
const myObj = {
    name: "Ayan",
    age: 17,
    city: "Karachi"
};
```

### Breakdown:
- Keys: `name`, `age`, `city`
- Values: `"Ayan"`, `17`, `"Karachi"`
- The object `myObj` has 3 properties.

---

## 🛠️ Creating Objects using Constructor Function

JavaScript allows you to define a blueprint for creating multiple similar objects using **constructor functions**.

### Example:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

- `this` keyword is used to assign property values during object creation.
- Conventionally, constructor function names start with a capital letter.

### Creating an instance:

```js
const myCar = new Car("Eagle", "Talon TSi", 1993);
console.log(myCar.make);  // Output: Eagle
```

---

## 🔍 Summary

- JavaScript objects are versatile and essential in almost all JS applications.
- You can create objects using literals, constructors, or `Object.create()`.
- Objects are used to group related data and behavior (via methods) into structured units.

---



