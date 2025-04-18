//! example of basic server

const express = require("express");
const app = express();
const port = 5000;

//! Middleware
app.use((req, res, next) => {
    console.log('Request received!');
    next(); // Pass control to the next middleware/route
  });


//! Routing



app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get('/user/:name', (req, res) => {
    res.send(`Hello : ${req.params.name}`);
  });

  app.post('/form', (req, res) => {
    res.send(`Form Accepted`);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
