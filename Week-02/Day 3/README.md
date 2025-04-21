# 📌 Topic: Bash (Advanced)

✅ **What is Advanced Bash?**  
Advanced Bash means using more powerful and complex features of the Bash shell — like loops, conditionals, scripts, variables, and more — to automate tasks and write small programs.

Bash ka advanced use matlab aise commands aur tools ka istemal jo repetitive tasks ko automate karein ya logical decisions le sakein.

---

## ✅ Bash Variables  
💡 Store and reuse data in scripts.

```bash
name="Ali"
echo "Hello, $name"
```

📍 Output:
```
Hello, Ali
```

---

## ✅ If-Else Condition (Decision Making)

```bash
if [ $age -ge 18 ]; then
  echo "You are an adult"
else
  echo "You are a minor"
fi
```

📍 Explanation: Agar age 18 ya usse zyada hai toh adult, warna minor.

---

## ✅ Loops (Repeat Commands)

### 🔁 For Loop:
```bash
for i in 1 2 3
do
  echo "Number $i"
done
```

### 🔁 While Loop:
```bash
count=1
while [ $count -le 5 ]
do
  echo "Count: $count"
  ((count++))
done
```

---

## ✅ Bash Functions

```bash
greet() {
  echo "Hello, $1!"
}

greet "Zara"
```

📍 Output: `Hello, Zara!`

---

## ✅ Script File (.sh)  
Save commands in a `.sh` file and run it.

📄 **myscript.sh**
```bash
#!/bin/bash
echo "Running a script!"
```

🔧 Make it executable:
```bash
chmod +x myscript.sh
./myscript.sh
```

---

## ✅ Summary Notes – Bash (Advanced)

| Concept        | Urdu Meaning                     | Use                               |
|----------------|----------------------------------|------------------------------------|
| Variables      | Data store karna                | Store and reuse information        |
| if-else        | Conditions lagana               | Decision making in scripts         |
| Loops          | Repeat karna                    | Repeat tasks automatically         |
| Functions      | Reusable blocks banana          | Write once, use multiple times     |
| Scripts        | Commands ko file mein likhna    | Automate tasks easily              |

---

# 📌 Topic: How to Install Node.js

✅ **What is Node.js?**  
Node.js is a JavaScript runtime that lets you run JavaScript code outside the browser — useful for building servers, tools, and backend apps.

Node.js aik tool hai jo JavaScript ko browser ke bahar bhi chalanay deta hai — jaise backend programs aur servers.

---

## ✅ Install Node.js on Windows

1. Go to: [https://nodejs.org](https://nodejs.org)
2. Download the **LTS version**
3. Run the installer (next-next-finish)
4. Check if it's installed:

```bash
node -v
npm -v
```

📍 Output:  
```
v18.17.1   ← Node version  
9.6.7      ← npm (Node Package Manager)
```

---

## ✅ Install Node.js on Ubuntu/Linux

```bash
sudo apt update
sudo apt install nodejs
sudo apt install npm
```

✅ Check versions:
```bash
node -v
npm -v
```

---

## ✅ Install using Node Version Manager (nvm) — Recommended for Developers

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Reload terminal:
```bash
source ~/.bashrc
```

Install Node.js:
```bash
nvm install --lts
nvm use --lts
```

---

## ✅ Summary Notes – Node.js Install

| Step                   | Urdu Meaning                           | Description                              |
|------------------------|----------------------------------------|------------------------------------------|
| node -v               | Node ka version dekhna                 | Check Node is installed                  |
| npm -v                | npm ka version dekhna                  | Check Package Manager version            |
| nvm                  | Node Version Manager                   | Easily install multiple Node versions    |
| curl ... | Node installer ko download karna | Recommended for devs on Linux/macOS |

---

### 🆕 `chmod` – Change Permissions

**Purpose:** Change file or folder permissions (like read, write, execute)

**Command:**
```bash
chmod +x myscript.sh   # Makes the script executable
chmod 755 file.txt     # Sets read-write-execute permissions
```

🧠 `chmod` ka matlab hai “change mode” (file permissions ka mode)

---

### 📢 `echo` – Print Messages

**Purpose:** Output a string or variable

**Command:**
```bash
echo "Hello World"
echo "My name is $USER"
```

🧠 Scripts mein `echo` commonly used hota hai debug ya output ke liye.

---

### 🔽 `head` & `tail` – See Beginning or End of Files

**head** – First 10 lines of file
```bash
head file.txt
```

**tail** – Last 10 lines of file
```bash
tail file.txt
```

🧠 Use with `-n` flag:
```bash
head -n 5 file.txt   # First 5 lines
tail -n 15 file.txt  # Last 15 lines
```

---

### 🔗 `|` Pipe Operator

**Purpose:** Send output of one command into another command

```bash
cat file.txt | grep "error"
```

🧠 Pipe ka use hota hai chaining ke liye: ek command ka output dusre ka input banata hai.

---

### 🔢 `wc` – Word Count

**Purpose:** Count words, lines, and characters

```bash
wc file.txt
```

🧠 Use with flags:
```bash
wc -l file.txt   # Only lines
wc -w file.txt   # Only words
wc -c file.txt   # Only bytes
```

---

### 🔍 `grep` – Pattern Search in File

**Purpose:** Search for a keyword or pattern in a file

```bash
grep "apple" fruits.txt
```

🧠 Case-insensitive search:
```bash
grep -i "apple" fruits.txt
```

🧠 With pipe:
```bash
ps aux | grep node
```

---

### 🧬 `sed` – Stream Editor

**Purpose:** Search and replace inside files (non-interactive editing)

```bash
sed 's/old/new/g' file.txt
```

🧠 Replace "apple" with "banana" in whole file.

---

### 🧬 `awk` – Pattern Scanning & Text Processing

```bash
awk '{ print $1 }' file.txt
```

🧠 `awk` ka use hota hai column-wise filtering and data extraction ke liye.

Example: Show only usernames from `passwd` file
```bash
awk -F: '{ print $1 }' /etc/passwd
```

---

### 🕘 `history` – View Command History

**Command:**
```bash
history
```

🧠 Show all recent commands you've typed.

You can re-run by number:
```bash
!55
```

---

### 📝 Bash Script Example (Recap with Extra Commands)

```bash
#!/bin/bash

echo "Creating a file..."
touch myfile.txt

echo "Writing to file..."
echo "Hello from Bash!" > myfile.txt

echo "Reading file..."
cat myfile.txt

echo "Done."
```

Run with:
```bash
chmod +x script.sh
./script.sh
```

---


### 📘 New Commands Summary Table

| Command | Urdu Meaning | Use |
|---------|--------------|-----|
| chmod   | Permission set karna | Make file executable |
| echo    | Screen pe likhna | Print message or variable |
| head    | Start dikhana | Show first lines of file |
| tail    | End dikhana | Show last lines of file |
| wc      | Count karna | Count lines/words/chars |
| grep    | Search karna | Search text in files |
| sed     | Replace/edit karna | Edit file content |
| awk     | Text filter karna | Work with file data |
| pipe `|` | Combine commands | Chain commands together |
| history | Pichle commands dekhna | Show past terminal commands |

---


