## 📌 Topic: **Bash and Terminal**

---

### ✅ What is a **Terminal**?


The **Terminal** is a tool that lets you talk to your computer using **text commands** instead of clicking things.

 
**Terminal** aik tool hai jiske zariye aap apne computer se **text commands** ke zariye baat karte hain, bina mouse click kiye.

💡 **Example:**

- Instead of opening a folder by double-clicking, you can type:
  ```
  cd Documents
  ```

---

### ✅ What is **Bash**?


**Bash** stands for "**Bourne Again SHell**". It is a **shell** — a program that reads your **commands** and tells the operating system what to do.

 
**Bash** aik shell program hai jo aapke diye gaye **commands** ko samajhta hai aur operating system ko batata hai ke kya karna hai.

💡 **Example:**  
When you type this in terminal:

```
ls
```

Bash helps the system understand: "Show me the files in this folder."

---

### ✅ Terminal vs Bash (Simple Table)

| Concept    | Terminal                    | Bash                              |
| ---------- | --------------------------- | --------------------------------- |
| What it is | A program to write commands | A shell that understands commands |
| Purpose    | Interface for user input    | Interpreter for command execution |
| Example    | GNOME Terminal, iTerm, etc. | Bash, Zsh, Fish, etc.             |



- Terminal aik jagah hai jahan aap likhte hain.
- Bash aik system hai jo us likhe hue ko samajhta hai.

---

## ✅ Basic Bash Commands with Examples

### 1. `pwd`

**Purpose:** Show current folder (Print Working Directory)  
**Command:**

```bash
pwd
```

📍 Output:

```
/home/user/Desktop
```

Ye command aapko batati hai ke aap kis folder (directory) ke andar hain.

---

### 2. `ls`

**Purpose:** List files in the current folder  
**Command:**

```bash
ls
```

📍 Output:

```
file1.txt  folder1  image.png
```

Ye command current folder ke andar jo files ya folders hain unko dikhata hai.

---

### 3. `cd`

**Purpose:** Change Directory (folder change karna)  
**Command:**

```bash
cd Documents
```

Ye command aapko kisi aur folder ke andar le jaati hai.

---

### 4. `mkdir`

**Purpose:** Make a new folder  
**Command:**

```bash
mkdir myFolder
```

Ye command ek naya folder banata hai jiska naam `myFolder` hoga.

---

### 5. `touch`

**Purpose:** Create a new empty file  
**Command:**

```bash
touch file.txt
```

Ye command ek nayi file banati hai (khaali file).

---

### 6. `rm`

**Purpose:** Delete file or folder  
**Command:**

```bash
rm file.txt        # File delete karein
rm -r myFolder     # Folder delete karein (with -r = recursive)
```

Ye command file ya folder delete karne ke liye use hoti hai.

---

## ✅ Summary Notes (Perfect for Revision):

📝 **Terminal**:

- Interface to write commands
- Example: GNOME Terminal, iTerm, Command Prompt (Windows)

📝 **Bash**:

- Command interpreter (Shell)
- Understands and executes commands
- Default shell on many Linux/Mac systems

📝 **Important Commands**:
| Command | Urdu Meaning | Use |
|---------|------------------------|---------------------------------|
| `pwd` | Current folder dikhana | Show current directory |
| `ls` | Files dikhana | List files in current folder |
| `cd` | Folder change karna | Change directory |
| `mkdir` | Naya folder banana | Make new directory |
| `touch` | Nayi file banana | Create empty file |
| `rm` | Delete karna | Remove file/folder |

---


### 🔀 cd into Multiple Folders in One Command
**Command:**

```bash
cd folder1/folder2/folder3
```

🧠 Ye command ek hi baar mein aapko **nested folders ke andar** le jaata hai.

**Example:**

```bash
cd Documents/Projects/JavaScript
```

---

### 📝 cat – View File Content
**Purpose:** File ke andar kya likha hai usko terminal mein dikhata hai.

**Command:**

```bash
cat file.txt
```

📍 Output: File ke andar likha hua content screen pe aayega.

🧠 **cat** ka matlab hai **concatenate**, lekin mostly use hota hai **file content dekhne ke liye**.

---

### 📄 vi – Terminal Text Editor
**Purpose:** File ke andar likhne/edit karne ke liye use hota hai (inside terminal).

**Command:**

```bash
vi file.txt
```

- Press `i` to **start writing (insert mode)**
- Press `Esc` to **exit writing mode**
- Type `:wq` to **save and quit**

🧠 vi is old-school but powerful! (Mac/Linux default)

---

### 🔁 mv – Move or Rename Files
**Purpose:** File ko **move** ya **rename** karne ke liye.

**Command:**

```bash
mv oldname.txt newname.txt  # Rename
mv file.txt Documents/      # Move to Documents
```

🧠 `mv` = **move**, but also works for renaming.

---

### 📄 cp – Copy Files or Folders
**Purpose:** File ya folder ka duplicate banata hai.

**Command:**

```bash
cp file.txt copy.txt               # File copy
cp -r folder1 folderCopy           # Folder copy (recursive)
```

---

## 💻 Installing Node.js on Your Machine

**Step 1:** Go to [https://nodejs.org](https://nodejs.org)

**Step 2:** Download **LTS version** (Long-Term Support)

**Step 3:** Install and verify:

```bash
node -v     # ✅ Version of Node
npm -v      # ✅ Version of npm
```

---

## ⚙️ node – Run JS Files in Terminal

**Command:**

```bash
node file.js
```

🧠 Node terminal ke through aap **JavaScript ka code run kar sakte ho** without needing a browser.

---

## 📦 npm – Node Package Manager

**What is npm?**
> A tool to install external libraries (e.g., lodash, express)

**Command to install a package:**

```bash
npm install package-name
```

🧠 Example:

```bash
npm install axios
```

✨ This will create a `node_modules` folder and `package.json` if not already present.

---

### 📦 npm vs node

| Command | Purpose |
|--------|---------|
| `node` | Runs JS file |
| `npm`  | Manages libraries/packages |

---




| Command | Urdu Meaning | Use |
|--------|---------------|-----|
| cat     | File ka content dikhana | View content of file |
| vi      | File edit karna         | Open terminal-based editor |
| mv      | File rename ya move karna | Move or rename file |
| cp      | Copy karna | Duplicate file or folder |
| node    | JS code run karna | Run JavaScript in terminal |
| npm     | Library install karna | Manage Node.js libraries |

---


