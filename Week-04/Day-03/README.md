---

## ✅ Week 4.3 | MongoDB Deep Dive

---

### 🔹 **1. What is a Database?**

**Defination**: A database is a place where we store our data so we can use it later.
**Explain**: Database ek jagah hai jahan hum apna data save karte hain taa keh baad mein use kar sakein.

🧠 Example:
Just like you store contacts in your phone to call later — we store data (users, posts, orders) in a database.

---

### 🔹 **2. Database vs File System**

| Feature      | File System                    | Database (MongoDB)         |
| ------------ | ------------------------------ | -------------------------- |
| Structure    | Files and folders              | Documents & Collections    |
| Search Speed | Slow (need to open/read files) | Fast (indexed queries)     |
| Data Type    | Mostly text or binary          | JSON-like structured data  |
| Scalability  | Hard to scale                  | Easy to scale horizontally |

**Defination**: File system stores raw files, while a database stores structured, queryable data.
**Explain**: File system sirf files ko store karta hai, jabke database data ko structure ke sath store karta hai jise aasan tareeqe se search kar sakte hain.

---

### 🔹 **3. How to Install and Setup MongoDB**

**Steps:**

1. Visit [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
2. Download → Install → Set Environment Path (if needed)
3. Run service:

   * Windows: Use **MongoDB Compass** or `mongod` command
   * Mac/Linux: Use `brew services start mongodb-community`

---

### 🔹 **4. How to Install MongoDB Compass**

Compass is GUI (Graphical Tool) to manage MongoDB visually.

**Steps**:

* Download: [https://www.mongodb.com/try/download/compass](https://www.mongodb.com/try/download/compass)
* Install
* Open → Connect to `mongodb://localhost:27017`
* View your collections & documents easily.

---

### 🔹 **5. What is Mongoose?**

**Defination**: Mongoose is a library that helps Node.js talk to MongoDB easily. It gives structure and helps you define data shapes (Schemas).
**Explain**: Mongoose ek helper library hai jo MongoDB ko Node.js ke sath connect aur manage karna easy banata hai.

🧠 Without Mongoose → Mongo queries are raw.
🧠 With Mongoose → Cleaner code, schemas, validation, middleware.

---

### 🔹 **6. How to Connect Express App to MongoDB**

📦 Install first:

```bash
npm install mongoose
```

📁 In `app.js`:

```js
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Mongo Error", err));
```

---

### 🔹 **7. What are Models and Schemas in Mongoose?**

🔹 **Schema** → Blueprint (structure) of your document
🔹 **Model** → Actual object that interacts with DB

📁 Example:

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const User = mongoose.model("User", userSchema);
```

**Explain**: Schema batata hai kya kya fields hon gi. Model us structure ko use karke database se baat karta hai.

---

### 🔹 **8. How to Maintain Relationship Between Two Schemas**

📚 Example: A `Post` belongs to a `User`

```js
// userSchema.js
const userSchema = new mongoose.Schema({
  username: String
});
const User = mongoose.model("User", userSchema);

// postSchema.js
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});
const Post = mongoose.model("Post", postSchema);
```

Now you can **populate** the author:

```js
const post = await Post.find().populate("author");
```

**Explain**: Yeh ek relation banata hai jisme Post ke andar User ka ID store hota hai, baad mein usko fetch karke pura user ka data la sakte ho.

---

### 🔹 **9. `find`, `findOne`, `findById`, `update`, `delete` in Mongoose**

#### 🔍 Find All:

```js
User.find({});
```

#### 🔍 Find One:

```js
User.findOne({ name: "Ayan" });
```

#### 🔍 Find by ID:

```js
User.findById("645b...fd23");
```

#### 🔄 Update:

```js
User.findByIdAndUpdate(id, { age: 20 });
```

#### 🗑️ Delete:

```js
User.findByIdAndDelete(id);
```

**Explain**:

* `find` → sab records
* `findOne` → ek matching record
* `findById` → ID se
* `update` → data badalna
* `delete` → record mitaana

---

### 🔹 **10. MongoDB is Schema-less (So why use Schema in Mongoose)?**

**MongoDB by default**:

* Schema-less: You can save anything, even with different shapes.

**But in production**:

* Data needs consistency. e.g., Every user should have `email`, `password`.
* Mongoose schemas help you **validate** and **protect** structure.

📚 Example without schema:

```js
db.users.insertOne({ name: "Ayan" }); // okay
db.users.insertOne({ age: 25 }); // also okay
```

📚 With Mongoose schema → It ensures `name` and `age` always present and valid.

---

## ✅ Summary (In Simple Words)

| Topic             | Summary                              |
| ----------------- | ------------------------------------ |
| Database          | Data store center                    |
| File System vs DB | DB is structured, searchable         |
| MongoDB Compass   | GUI Tool for Mongo                   |
| Mongoose          | Node.js helper for MongoDB           |
| Schema            | Structure of document                |
| Model             | Real-time object to interact         |
| Relationship      | Use ObjectId + `ref`                 |
| CRUD              | find, update, delete etc.            |
| Schema-less       | Mongo flexible, Mongoose adds safety |

---

