const fs = require('fs');

const content = "Hello, how are you";

fs.writeFile('output.txt', content, 'utf8', (err) => {
    if (err) {
        console.error("❌ Error writing to file:", err);
        return;
    }
    console.log("✅ File has been written successfully!");
});

// Expensive operation below (to see async behavior)
for (let i = 0; i < 1e8; i++) {
    // simulate heavy task
}
console.log("💡 Expensive task done.");
