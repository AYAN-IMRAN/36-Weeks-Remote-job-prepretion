## 📘 **Week 3 - Day 1: Node.js Runtime + Recap-Free Express.js**

---

### ✅ What is Node.js Runtime?

**Node.js Runtime** = JavaScript ka environment **outside the browser**.

🧠 Normally, JS runs only in browsers (like Chrome, Firefox), but Node.js allows JS to run on **servers** or your **own machine** — jaise Python, C++, etc.

---

### ✅ Node.js Kaise Kaam Karta Hai?

Node.js built hai:
- **V8 Engine (Google)** par — yehi Chrome ka JS engine hai.
- **C++ Wrapper** ke sath — isse high performance milti hai.

📌 **Example samajho:**
```js
console.log("Hello from Node!");
```

👆 Ye code browser mein nahi, directly **terminal/command line** mein chalega after you install Node.js.

---

### ✅ Node.js vs Browser JS

| Feature            | Browser JS                | Node.js                        |
|--------------------|---------------------------|--------------------------------|
| Environment        | Browser only               | Machine (outside browser)      |
| Access to DOM      | Yes                        | ❌ No DOM (no window/document) |
| Used For           | Frontend (UI)              | Backend (server logic)         |
| Example Use        | Buttons, sliders, etc.     | APIs, DB calls, file handling  |

---

### 🧠 Why Node.js?

- **Fast** (V8 Engine + Non-blocking I/O)
- **JavaScript everywhere** (frontend + backend)
- **Lightweight and efficient**
- **Community support + NPM (packages)**

---

## ✅ Recap Note 📝

👉 The following topics were already covered in Week 2 Day 4:

- `What is backend?`
- `Why backend?`
- `Installing Node.js`
- `What is Express`
- `Why Express`
- `Express Routing`
- `GET vs POST`
- `Middleware`
- `Template Engine (EJS)`
- `Error Handling`
- `Serving Static Files`
- `Node.js vs Express`

✅ Already done in week 2 Day 4: 

---

## 🧩 Module System in Node.js (Import / Export)

Let’s make this **super simple**:

---

### ✅ `module.exports` & `require`

**📁 script1.js**
```js
var a = 10;
var b = 20;

module.exports = {
  first: a,
  second: b
};
```

**📁 main.js**
```js
var data = require('./script1');

console.log(data.first);  // 10
console.log(data.second); // 20
```

🧠 **Socho `module.exports`** ko jaise **gift box** — jo cheezein export karo ge, doosri file unko `require()` karke le leti hai 🎁

---

## ✅ NPM Reminder (Quick Refresher)

NPM = **Node Package Manager**

🧠 NPM = jaise **Play Store**, but for **code**

- You can install reusable code (libraries)
- Example: `express`, `mongoose`, `nodemon`, etc.

### Install:
```bash
npm install package-name
```

### Use in code:
```js
var express = require('express');
```

---



### ✅ **1. Express Generator Setup**

**🔧 Installation (Global):**  
```bash
npm i express-generator -g
```

**📦 Create a New App:**  
```bash
# Terminal commands
cd Desktop
express appname --view=ejs

cd appname
npm install
code .
```

**👨‍🔧 Express Generator Changes (Important):**  
In `app.js`, Express uses:
```js
app.use('/', indexRouter);
```

But inside routes file:
```js
router.get("/", function(req, res){});
```

---

### 🔁 **2. Nodemon Setup (Live Server Refresh)**

**Old:** `npm nodemon filename` ❌  
**Correct:**  
```bash
npx nodemon
```

---

### 🗃️ **3. MongoDB & Mongoose Basics**

#### 📚 **What is a Database? (Urdu + English)**
> Database woh jagah hoti hai jahan humara data save hota hai.

**Types:**
- 🧱 **Relational (SQL)** – Structured format (tables)
- 📦 **Non-Relational (NoSQL - MongoDB)** – Flexible, JSON-like documents

---

#### ⚙️ **Installing MongoDB & Mongoose**
1. Install MongoDB from official website  
2. Install Mongoose:
```bash
npm install mongoose
```

---

### 🔌 **4. MongoDB Connection Setup**

```js
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myDBName")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("Error:", err));
```

---

### 🧱 **5. Schema and Model Setup**

> Schema batata hai k har document mein kya-kya fields hon gi.

```js
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  age: Number
});

module.exports = mongoose.model("users", userSchema);
```

---

### 🔁 **6. Basic CRUD Operations in Mongoose**

**📥 Create User (Async Recommended):**

```js
router.get("/create", async (req, res) => {
  const createdUser = await userModel.create({
    username: "ayan",
    age: 18
  });
  res.send(createdUser);
});
```

**📤 Read All Users:**

```js
router.get("/all", async (req, res) => {
  const allUsers = await userModel.find({});
  res.send(allUsers);
});
```

**🗑️ Delete a User:**

```js
router.get("/delete", async (req, res) => {
  const deletedUser = await userModel.findOneAndDelete({
    username: "ayan"
  });
  res.send(deletedUser);
});
```

---

## 🖥️ **7. Client vs Server | Cookie vs Session**

| 🔍 | Cookie | Session |
|----|--------|---------|
| 📍 Location | Client Side (Browser) | Server Side |
| 📦 Use | Small data, e.g., theme, age | Auth, user data |
| ⏳ Expire | Manually set | Destroy on logout/session timeout |

---

### 🍪 **8. Cookies in Express**

✅ Already Installed in Express Generator!

**Set Cookie:**
```js
res.cookie("age", 18);
```

**Read Cookie:**
```js
console.log(req.cookies);
```

**Delete Cookie:**
```js
res.clearCookie("age");
```

---

### 🛡️ **9. Sessions in Express**

**Install Session:**
```bash
npm install express-session
```

**Setup in `app.js`:**
```js
const session = require("express-session");

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: "abcddsdsd"
}));
```

**Set Session Value:**
```js
req.session.newUser = true;
```

**Check Session:**
```js
if(req.session.newUser) {
  res.send("New User Come");
}
```

**Destroy Session:**
```js
req.session.destroy();
```

---

## 🎯 **10. Important Definitions & Differences**

### 🔐 **Authentication vs Authorization**
| Topic | Authentication | Authorization |
|-------|----------------|---------------|
| 🤔 What | Confirm user identity | Check permissions |
| 🔑 How | Login, OTP | Roles, Access control |
| Example | Email + Password check | Admin vs User access |

---

### 📊 **11. SQL vs NoSQL**

| Feature | SQL (MySQL, Postgres) | NoSQL (MongoDB) |
|--------|------------------------|-----------------|
| Structure | Tables, Rows | Documents (JSON) |
| Schema | Fixed | Flexible |
| Scaling | Vertical | Horizontal |

---

## 🧩 **12. Middlewares in Express**

### 💡 What is a Middleware?
> Middleware ek aisi function hoti hai jo request aur response ke beech ka kaam karti hai.

**Example:**
```js
app.use((req, res, next) => {
  console.log("Middleware working");
  next(); // goes to next middleware or route
});
```

### 🔥 Error Handling Middleware
```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

---

## ✅ **13. Global Error Catch & Zod Validation**

### 🔍 What is Zod?
> Zod ek validation library hai, jo batata hai k input valid hai ya nahi.

**Install:**
```bash
npm install zod
```

**Use in Route:**
```js
const { z } = require("zod");

const userSchema = z.object({
  username: z.string(),
  age: z.number()
});

router.post("/validate", (req, res) => {
  try {
    const result = userSchema.parse(req.body);
    res.send("Valid Data");
  } catch (err) {
    res.status(400).send(err.errors);
  }
});
```

---

## 📚 **Coming in Next Notes (Topics to be Covered)**

- 🔐 JWT Authentication
- 🗄️ MongoDB Compass & Atlas Cluster Setup
- 🛠️ Postgres Installation and Usage
- 🧠 Express Advanced Routing
- 📋 Validations in Depth
- 🧪 Testing APIs with Postman

---

