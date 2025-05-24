const fs = require('fs');

// File read kar rahe hain (asynchronously)
fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }
    console.log("📁 File content:", data);
});

// Halka sa “expensive” operation
for (let i = 0; i < 1e7; i++) {
    // Halka busy loop (CPU time lega)
}
console.log("💡 Light expensive operation done");