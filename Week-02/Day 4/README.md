
# 📘 **Week 2 - Day 4: Express.js Basics**

---

## ✅ What is Express.js?

**Express.js** is a **minimal, fast, and flexible** web application framework for **Node.js** that helps in building **web servers and APIs** with ease.

- Built on top of Node.js.
- Used for server-side (backend) development.
- Makes it easy to handle **routes**, **HTTP methods**, and **middleware**.

📌 **Think of it like this:**  
**Node.js = engine**,  
**Express.js = car built on that engine.**

---

## ✅ Why Express.js?

- Reduces complexity of backend code in Node.js.
- Built-in routing and middleware system.
- Scalable and lightweight.
- Easily integrates with databases like **MongoDB**, **MySQL**, etc.
- Ideal for building **RESTful APIs**.

📌 **Real Talk:** Express.js se backend development bohat asaan ho jata hai — especially for beginners.

---

## ✅ Installing Express.js & Running the App

Before using Express, make sure you have **Node.js** and **npm** installed.

### Step 1: Initialize a new Node project
```bash
npm init -y
```

### Step 2: Install Express.js
```bash
npm install express
```

### Step 3: Create your main file (e.g. `app.js`)
```js
// app.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

### Step 4: Run your app
```bash
node app.js
```

✅ Now open your browser and go to:  
[http://localhost:3000](http://localhost:3000)

---

## ✅ Node.js vs Express.js

| Feature         | Node.js                        | Express.js                       |
|----------------|--------------------------------|----------------------------------|
| Definition      | JavaScript runtime environment | Framework built on Node.js       |
| Usage           | Low-level (manual HTTP handling) | High-level (easy to use)       |
| Routing         | Manual                         | Built-in routing system          |
| Middleware      | No built-in support            | Full middleware support          |

🧠 **Example**: Writing server code is much shorter and cleaner in Express than raw Node.js.

---

## ✅ Routing in Express.js

**Routing** decides **how the app responds** to various requests (GET, POST, etc.).

```js
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.post('/submit', (req, res) => {
  res.send('Form Submitted');
});
```

📌 Route = **URL + HTTP Method**

---

## ✅ Middleware in Express.js

**Middleware** is a function that runs **between** the **request** and the **response**.

Used for:
- Logging
- Authentication
- Validating data
- Error handling

```js
app.use((req, res, next) => {
  console.log('Request received!');
  next(); // Pass control to the next middleware/route
});
```

📌 Socho middleware ko jaise **security checkpoint** — har request uske through guzarti hai.

---

## ✅ Request & Response Objects

- **`req`** (Request): Data coming from the client.
- **`res`** (Response): What server sends back to the client.

```js
app.get('/user', (req, res) => {
  res.send(`Hello, ${req.query.name}`);
});
```

🧠 `req.body`, `req.query`, `req.params` → Different ways to receive data.

---

## ✅ Route Parameters

Used for **dynamic URLs** like profiles or products.

```js
app.get('/user/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});
```

🧠 Example: `/user/5` → `req.params.id` = `5`

---

## ✅ Template Engine (EJS)

**EJS (Embedded JavaScript Templates)** allows rendering dynamic content in HTML using JS.

### Step 1: Install EJS
```bash
npm install ejs
```

### Step 2: Set up EJS in Express
```js
app.set('view engine', 'ejs');
```

### Step 3: Create a view and render it
```js
app.get('/', (req, res) => {
  res.render('home', { name: 'Ali' });
});
```

**home.ejs**
```html
<h1>Hello <%= name %></h1>
```

📌 EJS se HTML ke andar JS variables easily inject kar sakte hain.

---

## ✅ Serving Static Files

**Static files** = images, CSS, JS files.

```js
app.use(express.static('public'));
```

📁 Folder structure:
```
public/
  └─ style.css
```

Then you can access: `http://localhost:3000/style.css`

---

## ✅ HTTP Methods: GET vs POST

| Method | Purpose           | Example Use         |
|--------|-------------------|---------------------|
| GET    | Retrieve data     | Load page, get info |
| POST   | Send data         | Submit form, send login data |

```js
app.get('/login', (req, res) => {
  res.send('Login Page');
});

app.post('/login', (req, res) => {
  res.send('Logging in...');
});
```

---

## ✅ Error Handling in Express

Create a special middleware for catching errors:

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```

📌 Always define error-handling middleware at the **end of all routes**.

---

## 🗂 Example: Basic Express App

```js
// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.get('/user/:name', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Server error!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

### ✅ Run the App
```bash
node app.js
```

🖥️ Visit: [http://localhost:3000](http://localhost:3000)

---

## 🔑 Key Points Summary

- **Express.js** makes backend development faster and easier.
- **Routing** connects URLs to server logic.
- **Middleware** acts as a processing step between request and response.
- **Request/Response** objects are the backbone of communication.
- **EJS** enables dynamic HTML rendering.
- **Static files** are served using `express.static`.
- **GET vs POST** are two core HTTP methods.
- Always use **error handling middleware** at the end.
- Run your server with: `node app.js`

---

## 💬 Quick Recall:

- Express.js → Node.js ka helper, easy backend banane ke liye.
- Middleware → Request ke darmiyan ka checkpoint.
- Routing → App ka "traffic signal", decide karta hai kya response dena hai.
- EJS → HTML + JavaScript = Dynamic pages.
- Error handling → Server ko crash hone se bachata hai.
- Server start karne ke liye: `node app.js`

