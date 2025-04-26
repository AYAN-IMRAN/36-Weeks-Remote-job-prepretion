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


### ✅ Flash Messages in Express (with `connect-flash`)

**Definition:**  
Flash messages are temporary messages stored in session and removed after being displayed to the user. They are useful for sending success or error messages between redirects.

#### 🔧 Setup
```bash
npm i connect-flash express-session
```

#### 🧠 Use in `app.js`
```js
const session = require("express-session");
const flash = require("connect-flash");

app.use(session({
  secret: "hello hello baaye baaye",
  resave: false,
  saveUninitialized: false
}));

app.use(flash());
```

#### 🧪 Dry Run:
```js
req.flash("age", 18);
```
➡ Ye ek temporary message set kar raha hai session mein `age` key ke sath.

```js
res.send("bangaya");
```
➡ Page redirect ya response diya gaya, message backend pe set ho gaya.

Ab check route:
```js
console.log(req.flash("age"));
res.send("check kr lo be ky terminal pr value agai ");
```
➡ Ye check karega ke message session mein hai ya nahi. Pehli baar milay ga, second time mein remove ho jata hai.

---

### 🗃️ Mongoose Schema (Basics + Advance)

**Definition:**  
A Mongoose Schema defines the structure of the documents in a MongoDB collection. It acts like a blueprint.

#### 📦 Example:
```js
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  nickname: String,
  description: String,
  categories: {
    type: Array,
    default: []
  },
  datecreated: {
    type: Date,
    default: Date.now
  }
});
```

#### 🧪 Dry Run:
➡ Is schema mein user ka naam, nickname, ek description aur categories ka array rakha gaya hai.  
➡ Agar categories nahi di to default khaali array set ho jaye ga.  
➡ `datecreated` mein document banne ka waqt record ho ga.

---

### 🔍 MongoDB Search (Advance Filtering Techniques)

#### 🔡 Case-Insensitive Search (regex + `i` flag)
```js
var regex = new RegExp("Ayan", "i");
let user = await userModel.find({ username: regex });
```

🧪 **Dry Run:**  
➡ Ye query `ayan`, `Ayan`, `AYAN` sab match kare gi.

---

#### 🔢 Start/End Word Matching
```js
var regex = new RegExp("^Ayan$", "i");
let user = await userModel.find({ username: regex });
```

🧪 **Dry Run:**  
➡ Yeh sirf un usernames ko match kare ga jo **sirf "Ayan"** hain, koi aur characters allowed nahi.

---

#### 🔍 Search in Array (e.g., categories)
```js
let user = await userModel.find({
  categories: { $all: ["JS", "TS"] }
});
```

🧪 **Dry Run:**  
➡ Wo users milein gy jinki categories mein **JS aur TS dono hon**.

---

#### 📅 Date Range Filtering
```js
let date1 = new Date(2024, 0, 1); // Jan 1, 2024
let date2 = new Date(2024, 11, 31); // Dec 31, 2024

let user = await userModel.find({
  datecreated: { $gte: date1, $lte: date2 }
});
```

🧪 **Dry Run:**  
➡ Yeh un documents ko fetch kare ga jo Jan se Dec 2024 ke darmiyan banay gaye hain.

---

#### ✅ Field Existence Check
```js
let user = await userModel.find({ categories: { $exists: true } });
```

🧪 **Dry Run:**  
➡ Sirf unhi documents ko fetch kare ga jisme `categories` field maujood hai.

---

### 🧾 Create Sample User (Dry run)
```js
router.get('/create', async function (req, res) {
  await userModel.create({
    username: "Ayan",
    nickname: "Nanu",
    description: "I'm AI and Full Stack Engineer",
    categories: ["JS", "TS"]
  });

  res.send("User created!");
});
```

🧪 **Dry Run:**  
➡ Ye ek naya user banata hai database mein with predefined fields.

---

## 🔐 Authentication & Authorization 

**Definition:**  
Authentication is the process of verifying user identity. Authorization defines what an authenticated user can access.

### 🧰 Required Packages:
```bash
npm i passport-local passport-local-mongoose mongoose express-session
```

### 🔗 Setup (`app.js`)
```js
const session = require("express-session");
const passport = require("passport");

app.use(session({
  secret: "hello hello baaye baaye",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
```

---

### 📄 Setup Schema with Plugin (`users.js`)
```js
const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  secret: String
});

userSchema.plugin(plm);
module.exports = mongoose.model("user", userSchema);
```

---

### 🎯 Register Route
```js
const LocalStrategy = require("passport-local");
passport.use(new LocalStrategy(userModel.authenticate()));

router.post("/register", function (req, res) {
  let userData = new userModel({
    username: req.body.username,
    secret: req.body.secret
  });

  userModel.register(userData, req.body.password)
    .then(function (registeredUser) {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/profile");
      });
    });
});
```

🧪 **Dry Run:**  
➡ Pehle user ka data create hota hai  
➡ Fir `.register()` se password bhi hash hoke store hota hai  
➡ Phir authenticate ho jata hai aur user ko profile pe redirect kar dete hain.

---

### 🔐 Login
```js
router.post("/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/"
  }), function (req, res) {});
```

---

### 🚪 Logout
```js
app.get('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) return next(err);
    res.redirect('/');
  });
});
```

---

### 🔐 isLoggedIn Middleware
```js
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/");
}
```

---





### 🔰 **Introduction**

Authentication and security are the heart of any backend system. Without properly verifying *who* is using your application and *what* they’re allowed to do, your entire app is at risk.

---

## ✅ **Authentication vs Authorization**

### 🔐 **Authentication** (Main aap kaun ho?)

**Definition**: Proving the identity of a user. Yaani user ka login hona.

**Example**: Email/password dalna ya Google/Facebook se login karna.

> Jab user login karta hai, hum check karte hain ke ye banda asal mein wohi hai ya nahi.

---

### 🛡️ **Authorization** (Aap kya kar saktay ho?)

**Definition**: Granting or denying access to certain parts of the app based on user roles/permissions.

**Example**: Admin ko sab kuch access hai, user ko sirf profile.

> Har user ko har feature ka access nahi hota. Authorization decide karta hai kis role ko kya access hai.

---

## 🍪 **Cookies and Session**

**Cookies**: Small pieces of data stored in the browser (client-side). Often used to store session tokens (like JWT).

**Sessions**: Stored on the server. They remember the user's identity and state (like login info).

---

### 🔧 **How to Set a Cookie in Express**

```js
res.cookie("token", token, {
  httpOnly: true,
  maxAge: 24 * 60 * 60 * 1000, // 1 day
});
```

> Cookie browser main store hoti hai, jisme hum token rakhte hain jo server check karta hai.

---

## 🔐 **bcrypt - Password Hashing (Encryption)**

### 📦 Install
```bash
npm i bcrypt
```

### ✅ **What is Hashing?**

> Hashing means converting plain text into unreadable format using an algorithm.

**Example:**
```js
const bcrypt = require('bcrypt');
const password = "mySecret123";

bcrypt.hash(password, 10, (err, hash) => {
  console.log(hash);
});
```

> Hum password ko aise encrypt karte hain ke original password mil hi nahi sakta. Isy hash bolte hain.

---

### 🔁 **How to Compare Passwords (Login ke time)**

```js
bcrypt.compare(userInput, hashedPassword, (err, result) => {
  if(result){
    console.log("Passwords match");
  } else {
    console.log("Wrong password");
  }
});
```

---

## 🔐 **What is JWT (JSON Web Token)?**

JWT is a **secure way to send data** between server and client.

- Contains user info in an **encoded** form.
- It is **stateless** (no need to store on server).
- Mostly used in authentication.

### 📦 Install
```bash
npm i jsonwebtoken
```

---

### 🔧 **JWT Usage**

#### ➕ Create a Token

```js
const jwt = require('jsonwebtoken');

const token = jwt.sign({ userId: user._id }, "mySecretKey", {
  expiresIn: "1d",
});
```

#### ✅ Verify Token (Authorization Middleware)

```js
const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.status(403).send("Token missing");

  jwt.verify(token, "mySecretKey", (err, decoded) => {
    if (err) return res.status(401).send("Invalid Token");

    req.user = decoded;
    next();
  });
};
```

> JWT ek signature hota hai user ka, jo server check karta hai. Agar token valid ho, toh user ko access milta hai.

---

## ⚙️ **Server Boilerplate & Express Setup**



### 🚀 Express Setup

```js
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());
```

---

### 🧠 Other Key Concepts (Based on Your Timeline)

#### 🧩 View Engine Setup (EJS Example)

```js
app.set('view engine', 'ejs');
```

#### 🎨 Tailwind CSS with Express

- Can be used for frontend templates rendered via EJS or plain HTML.

#### 🧬 Mongoose Setup

```js
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mydb");
```

#### 👤 Create User Schema

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

module.exports = mongoose.model("User", userSchema);
```

---

## 🔐 **Authentication Flow (Login/Logout)**

### 🧾 Register Route (Hash Password)

```js
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  
  // Save to DB
});
```

### 🔑 Login Route (Compare Password + Set Token)

```js
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  const match = await bcrypt.compare(password, user.password);

  if(match){
    const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "1d" });
    res.cookie("token", token, { httpOnly: true });
    res.send("Login success");
  }
});
```

### 🚪 Logout Route

```js
app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.send("Logged out");
});
```

---

## 📚 Summary - Key Points

| Topic | Explanation |
|-------|-------------|
| 🔐 Authentication | Verifying user identity (Login) |
| 🛡️ Authorization | Granting access to protected routes |
| 🔒 bcrypt | Encrypting passwords (Hashing) |
| 🔑 JWT | Secure token to verify user without session |
| 🍪 Cookie | Storing JWT in browser |
| 🔧 Middleware | Function to protect routes by checking token |
| 🗃️ MongoDB | NoSQL DB for storing users |
| 📁 Mongoose | ODM for MongoDB |
| 🚀 Express | Framework to handle routes, APIs, middleware |

---
