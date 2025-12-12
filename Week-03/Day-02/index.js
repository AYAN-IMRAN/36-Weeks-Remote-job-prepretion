// 🚀 Import Express
const express = require('express');
const app = express();

// 🧠 Middleware: Authentication Check
function authenticationCheck(req, res, next) {
  const token = req.headers['authorization'];
  console.log("🔑 Auth Token:", token);

  if (!token) {
    console.log("⚠️  No token provided. Access denied!");
    return res.status(401).json({ msg: "❌ Please login first!" });
  }

  console.log("✅ Token verified, access granted!");
  next();
}

// 🌍 Home Route
app.get('/', (req, res) => {
  console.log("🏠 '/' route hit successfully");
  res.send('👋 Hello, Server is alive!');
});

// 🔒 Protected Route
app.get('/profile', authenticationCheck, (req, res) => {
  console.log("👤 '/profile' route accessed");
  res.send("🎉 Welcome to your profile!");
});

// 🚦 Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`⚡ Server running on port ${PORT}`);
});
