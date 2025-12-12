const express = require("express");
const app = express();
const Port = 5000;

app.use(express.json()); // to parse JSON body data Important 

// Dummy data
const ALL_USERS = [
  { id: 123, name: "Ayan" },
  { id: 1234, name: "Ahmed" },
];

// ✅ Home route
app.get("/", (req, res) => {
  console.log("✅ GET / — Home route hit");
  res.send("Hello World 🌍");
});

// ✅ Route with PARAM (dynamic URL part)
app.get("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  console.log("🟢 Request received for user ID:", userId);

  const user = ALL_USERS.find(u => u.id === userId);

  if (!user) {
    console.log("❌ No user found for ID:", userId);
    return res.status(404).json({ msg: "User not found 😢" });
  }

  console.log("✅ User found:", user);
  res.status(200).json({
    msg: `Hello ${user.name}! Welcome back 😎`,
    user,
  });
});

// ✅ Route with QUERY (extra info in URL like ?role=admin)
app.get("/dashboard", (req, res) => {
  const role = req.query.role;
  console.log("🟣 Role query received:", role);

  if (role === "admin") {
    return res.status(202).json({ msg: "Your Admin Panel is here 🧑‍💼" });
  }

  res.status(200).json({ msg: "Your Profile is here 👤" });
});

// ✅ Route with BODY (used for POST — creating or sending data)
app.post("/create-user", (req, res) => {
  console.log("🧾 POST /create-user — body received:", req.body);

  const { id, name } = req.body;

  // Validation check
  if (!id || !name) {
    console.log("⚠️ Missing id or name field");
    return res.status(400).json({
      msg: "Please provide both 'id' and 'name'",
    });
  }

  // Add new user to dummy array
  ALL_USERS.push({ id, name });

  console.log("✅ New user added:", { id, name });
  res.status(201).json({
    msg: "User created successfully 🎉",
    user: { id, name },
    totalUsers: ALL_USERS.length,
  });
});

// ✅ Route with HEADERS (auth)
app.get("/auth", (req, res) => {
  const token = req.headers["authorization"];
  console.log("🔑 Auth route hit");

  if (!token) {
    console.log("❌ No token found in headers");
    return res.status(401).send("Please login first 🔒");
  }

  console.log("✅ Token received:", token);
  res.status(200).json({
    msg: "I got the token — you may visit your profile 🚀",
  });
});

// ✅ Server start
app.listen(Port, () => {
  console.log(`🚀 Server running on http://localhost:${Port}`);
});
