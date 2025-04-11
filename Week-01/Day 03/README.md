

## 🗓️ 36 WEEKS PREPARATION 

---

### ✅ **WEEK 01**  
#### 📅 **Day 03**

---

## 📘 Topic: `Sync`, `Async`, `Promises`, `async/await`




## 🧠 1. Synchronous JavaScript (`Sync`)
> JS is **single-threaded** by default – executes **one line at a time** (blocking).

### 🔑 Key Points:
- Tasks run **one after another**.
- Next line **waits** for current one to finish.
- Good for **simple & predictable** flow.

```js
console.log("1️⃣ Start");
console.log("2️⃣ Middle");
console.log("3️⃣ End");
```

🧾 Output:
```
1️⃣ Start
2️⃣ Middle
3️⃣ End
```

---

## 🌀 2. Asynchronous JavaScript (`Async`)
> Non-blocking – lets JS **do other things while waiting** (like I/O, timers, etc.)

### 🔑 Key Points:
- Code continues executing while async task completes.
- Uses **callback**, **promises**, or `async/await`.
- Browser APIs (like `setTimeout`, `fetch`) are **async**.

```js
console.log("1️⃣ Start");

setTimeout(() => {
  console.log("2️⃣ Delayed");
}, 1000);

console.log("3️⃣ End");
```

🧾 Output:
```
1️⃣ Start
3️⃣ End
2️⃣ Delayed
```


---

# 🧠 JavaScript: **Main Stack vs Side Stack** (Sync vs Async)

---

## 📍 1. Main Stack = **Call Stack** 🧱

### ✅ **Definition**:
> The **call stack** is where **JavaScript executes your synchronous code**, line by line.

### 🔑 Key Points:
- Runs in a **single thread** (one line at a time).
- Functions are **pushed onto the stack** when called.
- When done, they are **popped off** the stack.
- If stack is **busy**, nothing else runs – even UI freezes 😐

### 📦 Looks like:
```js
function a() {
  b();
}
function b() {
  console.log("📦 Inside b");
}
a();
```

📌 Stack Trace:
```
Global()
 → a()
   → b()
```

---

## 🌐 2. Side Stack = **Web APIs + Callback Queue** (aka "Side Stuff") 🛠️

### ✅ **Definition**:
> The **Side Stack** refers to all things **outside the call stack** – includes **Web APIs**, **Task Queues**, and the **Event Loop** that manages async code.

### 🌍 Components:
| Component       | Role                                  |
|----------------|----------------------------------------|
| 🧰 Web APIs      | Browser-provided async handlers (e.g. `setTimeout`, `fetch`) |
| 🕒 Task Queue    | Stores async callbacks to be run later |
| 🔁 Event Loop    | Sends tasks back to Main Stack when it's free |

---

## 🔁 Event Loop: The Traffic Cop 🚦

> Keeps checking: "Is the call stack empty?"  
> If yes, moves async tasks (from queue) to main stack.

---

## 🔄 Sync vs Async Flow Example

```js
console.log("1️⃣ Start");

setTimeout(() => {
  console.log("2️⃣ Timeout Callback");
}, 0);

console.log("3️⃣ End");
```

### 🔍 What Happens Internally:
1. `console.log("1️⃣ Start")` → Call Stack ✅
2. `setTimeout(..., 0)` → Sent to **Web API** ➡️ then to **Task Queue**
3. `console.log("3️⃣ End")` → Call Stack ✅
4. Event Loop sees call stack is empty ➡️ moves timeout callback to Call Stack
5. Callback executes → `console.log("2️⃣ Timeout Callback")`

🧾 Final Output:
```
1️⃣ Start
3️⃣ End
2️⃣ Timeout Callback
```

---

## 🧩 Important Notes

### 🧠 Call Stack (Main Stack):
- Handles **sync code**
- Executes top to bottom
- If stuck (e.g. infinite loop), **freezes browser**

### 🌐 Side Stack:
- Handles **async code**
- Works **with browser APIs**
- Waits until call stack is clear to execute callbacks

---

## ⚡ Microtask Queue vs Macrotask Queue

| Type       | Example APIs           | Priority |
|------------|------------------------|----------|
| Microtask  | `.then()`, `await`, `queueMicrotask()` | ⬆️ Higher |
| Macrotask  | `setTimeout`, `setInterval`           | ⬇️ Lower |

🧠 Microtasks are processed **right after current task**, before any macrotasks!



# 📊 JavaScript: **Sync vs Async Methods Table**

| 🔁 **Async Methods** (Non-blocking)                  | ⏹️ **Sync Methods** (Blocking)              |
|------------------------------------------------------|---------------------------------------------|
| `setTimeout()`                                       | Basic math: `1 + 1`, `let x = 5`            |
| `setInterval()`                                      | `console.log()`                             |
| `fetch()`                                            | Variable declarations: `let`, `const`, `var`|
| `XMLHttpRequest` (old-style async HTTP)              | `if/else`, `for`, `while`, `switch`         |
| `Promise.then()`                                     | Function calls (sync ones)                  |
| `Promise.catch()` / `Promise.finally()`              | Object/Array creation                       |
| `async/await`                                        | String manipulation                        |
| `queueMicrotask()`                                   | `Math.random()`, `Math.floor()`            |
| `requestAnimationFrame()`                            | Sync DOM access (`document.querySelector`)  |
| Event Listeners (`click`, `keydown`, etc.)           | Immediate code execution                    |
| Web Workers / Service Workers                        |                                             |

---

### 🧠 Notes:
- ✅ **Async methods** don't block the main thread – they're delegated to **Web APIs** and handled via the **event loop**.
- ⛔ **Sync methods** are run **immediately** in the **call stack** and block the thread until done.

---



## 🔥 Real-World Pro Insight:

```js
console.log("1");

setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));

console.log("4");
```

🧾 Output:
```
1
4
3 ✅ (Microtask)
2 ✅ (Macrotask)
```

---

## ✅ Summary

| Part         | Handles     | Type of Code    | Example               |
|--------------|-------------|-----------------|------------------------|
| 📦 Call Stack | Sync        | Main thread      | `console.log()`       |
| 🧰 Web APIs   | Async setup | Timer, Network   | `setTimeout`, `fetch` |
| 🎯 Callback Queue | Async exec | Waits to be pushed | After timeout finishes |
| 🔁 Event Loop | Manager     | Moves async tasks | Constantly running    |

---




## 🪝 3. Callback (💀 Old Way)

### 🔥 Callback Hell 🔥 (Pyramid of Doom)
```js
doTask1(() => {
  doTask2(() => {
    doTask3(() => {
      // 😵 Callback hell
    });
  });
});
```

🛑 Issues:
- Hard to read & maintain
- Difficult error handling
- Leads to **"Callback Hell"**

---

## 🌈 4. Promises: The Savior

> An object representing **eventual completion/failure** of an async operation.

### ✅ States:
- **Pending** ⏳
- **Fulfilled** ✅
- **Rejected** ❌

```js
const promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve("🎉 Success");
  else reject("💥 Error");
});

promise
  .then(result => console.log(result)) // 🎉
  .catch(error => console.error(error));
```

### 🔁 Chaining:
```js
doTask1()
  .then(doTask2)
  .then(doTask3)
  .catch(err => console.error("❌ Error:", err));
```

---

## 🧙‍♂️ 5. async/await – Magic Syntactic Sugar ✨

> Built on **promises**, but uses cleaner `await` syntax.

### 🌟 async:
- Declares a function that returns a **promise**.
```js
async function fetchData() {
  return "🎯 Data fetched";
}
```

### ⏳ await:
- Pauses execution until the promise is resolved/rejected.
- Can only be used **inside async function**.

```js
async function getData() {
  try {
    const data = await fetch("https://api.example.com/data");
    const json = await data.json();
    console.log(json);
  } catch (err) {
    console.error("❌ Error:", err);
  }
}
getData();
```

---

## ⚠️ Error Handling in async/await:
```js
async function riskyOp() {
  try {
    const res = await doSomethingRisky();
    console.log("✅ Done:", res);
  } catch (err) {
    console.error("❌ Failed:", err);
  }
}
```

---

## 🧩 Promise Combinators

### 🔁 Promise.all([]):
> Waits for **all** to succeed or returns error if any fails.

```js
Promise.all([p1, p2, p3])
  .then(results => console.log("✅ All done", results))
  .catch(err => console.log("❌ One failed", err));
```

### 🎲 Promise.race([]):
> Resolves/rejects as soon as **one settles** (fastest one wins).

### 📊 Promise.allSettled([]):
> Waits for **all**, regardless of success or failure.

### 🚦 Promise.any([]):
> Resolves with **first successful** one; ignores rejections unless **all fail**.

---

## 🔄 Microtasks vs Macrotasks

### 🧬 Microtasks (higher priority):
- `.then()` / `catch()` / `finally()`
- `queueMicrotask()`

### 🕒 Macrotasks:
- `setTimeout`, `setInterval`
- DOM events

```js
console.log("Start");

setTimeout(() => console.log("🕒 Timeout"), 0);
Promise.resolve().then(() => console.log("🧬 Microtask"));

console.log("End");
```

🧾 Output:
```
Start
End
🧬 Microtask
🕒 Timeout
```

---


## 🔹 1. `fetch()` – 🌐 API Request (Async)

### ✅ **Definition:**
> `fetch()` is a built-in JavaScript function used to **make network requests** (like calling an API).

### 🛠️ **How it Works:**
- Returns a **Promise**.
- Sends a request to a URL.
- When response arrives, you handle it using `.then()` or `await`.

### 📦 **Example:**
```js
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log("✅ Got data:", data))
  .catch(err => console.error("❌ Error:", err));
```

### 🔁 **Async Behavior:**
- Non-blocking.
- Uses **Web APIs** and **Promises** under the hood.
- `fetch()` immediately returns a Promise; main thread continues executing.

---

## 🔹 2. `setTimeout()` – ⏰ Timer Delay (Async)

### ✅ **Definition:**
> `setTimeout()` is used to run a piece of code **after a delay**.

### 🛠️ **How it Works:**
- Takes a **callback function** and a **time in milliseconds**.
- Sends the timer to **Web APIs**.
- After the delay, callback is pushed to the **callback queue**.

### 📦 **Example:**
```js
console.log("1️⃣ Start");

setTimeout(() => {
  console.log("2️⃣ After 2 seconds");
}, 2000);

console.log("3️⃣ End");
```

🧾 Output:
```
1️⃣ Start
3️⃣ End
2️⃣ After 2 seconds
```

### 🔁 **Async Behavior:**
- Doesn't block the main thread.
- Callback runs **after call stack is empty + delay has passed**.
- Runs via the **event loop**.

---

## 🔹 3. `setInterval()` – 🔁 Repeated Timer (Async)

### ✅ **Definition:**
> `setInterval()` runs a function **repeatedly** at a given time interval.

### 🛠️ **How it Works:**
- Same as `setTimeout()`, but repeats until stopped.

### 📦 **Example:**
```js
const id = setInterval(() => {
  console.log("🔄 Runs every 1 second");
}, 1000);

// To stop:
clearInterval(id);
```

### 🔁 **Async Behavior:**
- Keeps calling the callback every X ms **independently** of main thread.

---

## 🔹 4. `addEventListener()` – 🖱️ Event Handling (Async)

### ✅ **Definition:**
> Allows you to run code when the user interacts with the page (clicks, types, etc.).

### 🛠️ **How it Works:**
- Adds a function (callback) that is stored in the **event queue**.
- When event occurs and main stack is free, the callback runs.

### 📦 **Example:**
```js
document.getElementById("btn").addEventListener("click", () => {
  console.log("🖱️ Button clicked!");
});
```

### 🔁 **Async Behavior:**
- Event handlers are not called immediately.
- Handled via **callback queue + event loop** when user interacts.

---

## 🔹 5. `Promise.then()` – ⛓️ Promise Handling (Async)

### ✅ **Definition:**
> `.then()` is used to handle the result of a Promise once it resolves.

### 🛠️ **How it Works:**
- Executes callback when the promise is **fulfilled**.
- Queued in the **microtask queue**.

### 📦 **Example:**
```js
Promise.resolve("🎉").then(value => console.log(value)); // 🎉
```

### 🔁 **Async Behavior:**
- Handled via **microtask queue** (priority over `setTimeout`).
- Executes after sync code but before macrotasks.

---

## ✅ Summary Table

| Method             | Type        | Purpose                           | Async? | Handled via       |
|--------------------|-------------|-----------------------------------|--------|-------------------|
| `fetch()`          | Network     | API calls                         | ✅      | Promise + Web API |
| `setTimeout()`     | Timer       | Delay code                        | ✅      | Callback Queue    |
| `setInterval()`    | Timer       | Repeated delay                    | ✅      | Callback Queue    |
| `addEventListener()`| Event       | User interaction                  | ✅      | Event Queue       |
| `.then()`          | Promise     | Handle async result               | ✅      | Microtask Queue   |

---

## 🚀 Summary Cheatsheet:

| Concept        | Type       | Use Case                     |
|----------------|------------|------------------------------|
| Sync           | Blocking   | Simple sequential tasks      |
| Async          | Non-blocking | I/O, network, timers        |
| Callback       | Async      | Legacy async pattern         |
| Promise        | Async      | Cleaner async handling       |
| async/await    | Async      | Elegant promise usage        |

---

## 🧠 Rare Pro Tips:

- `await` blocks only **inside async functions**, not globally (unless top-level `await` is supported).
- Combine `Promise.allSettled` for **resilience** (when all must run).
- `async function` always returns a **promise**, even if you return plain value.
- Never mix `await` and `.then()` in same function unless needed.


