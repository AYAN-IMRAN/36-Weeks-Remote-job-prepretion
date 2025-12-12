const express = require('express');
const app = express();

app.use(express.json());


let numberOfRequests = 0;
let totalResponseTimeMs = 0;


function trackRequestsAndTime(req, res, next) {
  numberOfRequests++;
  const startTime = Date.now();

  res.on('finish', () => {
    const endTime = Date.now();
    const responseTime = endTime - startTime; 
    totalResponseTimeMs += responseTime;

    // nice console log for each request
    console.log(`➡ ${req.method} ${req.path} - ${res.statusCode} - ${responseTime}ms`);
  });

  next();
}


function limitRequests(req, res, next) {

  if (numberOfRequests > 6) {
    return res.status(429).json({ msg: "🚫 Rate limit reached. Try again later." });
  }
  next();
}

app.get('/', trackRequestsAndTime, (req, res) => {
  // calculate average safely
  const avgResp = numberOfRequests === 0 ? 0 : (totalResponseTimeMs / numberOfRequests).toFixed(2);
  res.status(200).json({
    TotalRequests: numberOfRequests,
    AverageResponseTimeMs: Number(avgResp),
  });
});

app.get('/profile', trackRequestsAndTime, limitRequests, (req, res) => {
  res.send('🎉 Welcome to profile!');
});

// Error handler (keeps simple)
app.use((err, req, res, next) => {
  console.error('🔥 Error:', err);
  res.status(500).json({ msg: 'Something went wrong' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`⚡ Server running on port ${PORT}`);
});
