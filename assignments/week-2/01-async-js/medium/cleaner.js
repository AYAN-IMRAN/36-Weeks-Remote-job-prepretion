const fs = require('fs');

// File read kar rahe hain (asynchronously)
fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }

    let cleanData = data.replace(/\s+/g, ' ').trim()

    fs.writeFile('output.txt', cleanData, 'utf8', (err) => {
        if (err) {
            console.error("❌ Error writing to file:", err);
            return;
        }
        console.log("✅ File cleaned and saved!");
        
    });


});