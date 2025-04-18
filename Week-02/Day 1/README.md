
## ✅ **Additional Key Points & Pro-Level Additions**
> **Current Week**: `Week 02 - Day 01`

---

### 🔁 Synchronous vs Asynchronous (Deep Clarity)

#### 🔹 Missing Insight: **JS Engine vs Browser APIs**
- JS itself (via the engine like V8) doesn’t have `setTimeout`, `fetch`, etc.
- **Browser (or Node)** provides those via **Web APIs**.
- Think of it like:
  ```txt
  JS Engine: I'll only run logic & promises.
  Browser: I'll handle your timers, network calls.
  ```

---

### 🧠 The Call Stack + Event Loop (Deeper View)

#### 🔹 Missing Insight: **Tasks vs Jobs**
- **Jobs = Microtasks** (Promise callbacks)
- **Tasks = Macrotasks** (setTimeout, setInterval)
- **Order of Execution:**
  ```txt
  1. Current sync code
  2. Microtasks (queueMicrotask, .then)
  3. Macrotasks (setTimeout, DOM events)
  ```

#### 🧪 Example:
```js
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
queueMicrotask(() => console.log("4"));
console.log("5");
```

🧾 **Output:**
```
1
5
3
4
2
```

🧠 `Promise.then()` and `queueMicrotask()` run **before** setTimeout!

---

### 🪝 Promises (Pro Insight)

#### 🔹 Missing Tip: **Promises are eager**
```js
const p = new Promise((resolve) => {
  console.log("Running promise executor");
  resolve();
});
```
📌 Output: `"Running promise executor"` — runs immediately!

#### 🔹 Missing Concept: **Error Propagation**
```js
Promise.reject("💥").catch(err => {
  console.error("Caught:", err);
});
```
✅ Always `.catch()` to prevent **UnhandledPromiseRejectionWarning`.

---

### ✨ async/await – Deeper Magic

#### 🔹 Hidden Gotcha: **await inside loops**

🚫 **Don’t do this:**
```js
for (let item of items) {
  await fetch(item); // ❌ slow, serial
}
```

✅ **Do this instead** (parallel):
```js
await Promise.all(items.map(item => fetch(item)));
```

---

### 🧪 Real-World Race Conditions Example

```js
async function getUserData() {
  const user = await fetch('/user');
  const posts = await fetch('/posts');
}
```

🧠 Better:
```js
const [user, posts] = await Promise.all([
  fetch('/user'),
  fetch('/posts')
]);
```

---

### 🧩 Promise Combinators – Use Cases

| Method | Description | When to Use |
|--------|-------------|-------------|
| `Promise.all` | All or nothing | When *all* must succeed |
| `Promise.race` | Fastest settles | Use in timeout fallback logic |
| `Promise.allSettled` | Always waits | Good for reporting status |
| `Promise.any` | First successful | Use when any success is OK |

#### 🔍 Example:
```js
const results = await Promise.allSettled([
  fetch('/a'),
  fetch('/b')
]);
results.forEach(res => {
  if (res.status === "fulfilled") console.log(res.value);
  else console.error(res.reason);
});
```

---

### 🌐 `fetch()` + Response Handling Best Practice

```js
async function getData() {
  const res = await fetch(url);
  if (!res.ok) throw new Error("❌ Network Error");
  const data = await res.json();
}
```

🧠 `res.ok` check avoids silent 404/500 errors.

---

### 🧠 Pro Tips Recap

| 🔥 Tip | Explanation |
|--------|-------------|
| `await` only blocks inside `async` | Not globally unless using top-level `await` |
| `async` always returns a Promise | Even if returning plain value |
| Don't `await` in loops | Use `Promise.all` for performance |
| Chain `.catch()` always | Prevent unhandled rejections |
| `Promise.allSettled` > `all` if you want resilience | Good for tasks where failure is OK |




# 📘 JavaScript Async Mastery – **Cheatsheet**



## 🔁 **Sync vs Async**

| 🧠 Concept | 📌 Sync | ⚡ Async |
|-----------|---------|----------|
| Thread Blocking | ✅ Yes | ❌ No |
| Runs via | Call Stack | Web APIs + Event Loop |
| Examples | `console.log()`, math ops | `setTimeout()`, `fetch()`, `Promise.then()` |

---

## 🧱 **Call Stack & Event Loop Flow**

```
1. Sync code → Call Stack
2. Async task → Web API
3. Web API → Task/Microtask Queue
4. Event Loop → Pushes to Call Stack
```

✅ **Microtasks before Macrotasks**

---

## 📊 **Microtask vs Macrotask**

| Type | Examples | Priority |
|------|----------|----------|
| 🧬 Microtask | `.then()`, `await`, `queueMicrotask()` | ⬆️ High |
| 🕒 Macrotask | `setTimeout()`, `setInterval()`, DOM events | ⬇️ Low |

🧪 Output Example:
```js
console.log("Start");
setTimeout(() => console.log("🕒 Timeout"), 0);
Promise.resolve().then(() => console.log("🧬 Microtask"));
console.log("End");
```
🧾 Result: `Start → End → Microtask → Timeout`

---

## 🪝 **Promises**

✅ **States**:
- `pending ⏳`
- `fulfilled ✅`
- `rejected ❌`

✅ **Always chain `.catch()` to handle errors**

🧪 Example:
```js
new Promise((res, rej) => res("✅"))
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

---

## ✨ **async/await**

- `async` returns a Promise
- `await` pauses inside `async` until resolved

🧠 Can't use `await` at top-level (unless environment supports it)

✅ Example:
```js
async function getData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
  } catch (err) {
    console.error(err);
  }
}
```

---

## 🧩 **Promise Combinators**

| Method | Behavior | Use Case |
|--------|----------|----------|
| `Promise.all` | Waits for all ✅ or fails ❌ | Dependent tasks |
| `Promise.allSettled` | Waits for all regardless | Reporting, UI |
| `Promise.race` | First to settle wins 🏁 | Timeouts |
| `Promise.any` | First to succeed | Fast fallback |

🧪 `allSettled` Example:
```js
const results = await Promise.allSettled([p1, p2]);
results.forEach(r => console.log(r.status));
```

---

## 🔂 Common Async APIs

| Method | Type | Async? | Handled via |
|--------|------|--------|-------------|
| `fetch()` | Network | ✅ | Promise + Web API |
| `setTimeout()` | Timer | ✅ | Macrotask |
| `setInterval()` | Timer | ✅ | Macrotask |
| `.then()` | Promise | ✅ | Microtask |
| `addEventListener()` | Event | ✅ | Event Queue |

---

## ⚠️ Gotchas & Pro Tips

✅ **Promises are eager**  
```js
new Promise(() => console.log("🔥 Runs immediately!"));
```

⚠️ **Avoid await in loops**
```js
// ❌ Slow
for (let item of list) {
  await fetch(item);
}

// ✅ Better
await Promise.all(list.map(item => fetch(item)));
```

✅ **Check fetch status**
```js
if (!res.ok) throw new Error("❌ Network error");
```

✅ `queueMicrotask()` → for precise microtask timing

✅ `async function` always returns a Promise

---

## 🔁 Quick Recap

| Concept | Role | Notes |
|--------|------|-------|
| **Call Stack** | Executes sync | One line at a time |
| **Web API** | Runs async logic | setTimeout, fetch |
| **Task Queue** | Stores callbacks | setTimeout, etc. |
| **Microtask Queue** | Stores promises | `.then()`, `await` |
| **Event Loop** | Traffic Cop 🚦 | Moves tasks when stack is empty |

---



