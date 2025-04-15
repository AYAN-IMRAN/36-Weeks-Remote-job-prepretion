## 📌 Topic: **Bash and Terminal**

---

### ✅ What is a **Terminal**?

🟢 **English:**  
The **Terminal** is a tool that lets you talk to your computer using **text commands** instead of clicking things.

🟢 **Urdu (English script):**  
**Terminal** aik tool hai jiske zariye aap apne computer se **text commands** ke zariye baat karte hain, bina mouse click kiye.

💡 **Example:**  
- Instead of opening a folder by double-clicking, you can type:  
  ```
  cd Documents
  ```

---

### ✅ What is **Bash**?

🟢 **English:**  
**Bash** stands for "**Bourne Again SHell**". It is a **shell** — a program that reads your **commands** and tells the operating system what to do.

🟢 **Urdu (English script):**  
**Bash** aik shell program hai jo aapke diye gaye **commands** ko samajhta hai aur operating system ko batata hai ke kya karna hai.

💡 **Example:**  
When you type this in terminal:
```
ls
```
Bash helps the system understand: "Show me the files in this folder."

---

### ✅ Terminal vs Bash (Simple Table)

| Concept     | Terminal                     | Bash                              |
|-------------|------------------------------|------------------------------------|
| What it is  | A program to write commands  | A shell that understands commands |
| Purpose     | Interface for user input     | Interpreter for command execution |
| Example     | GNOME Terminal, iTerm, etc.  | Bash, Zsh, Fish, etc.              |

🟢 **Urdu:**  
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

🟢 Urdu: Ye command aapko batati hai ke aap kis folder (directory) ke andar hain.

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

🟢 Urdu: Ye command current folder ke andar jo files ya folders hain unko dikhata hai.

---

### 3. `cd`  
**Purpose:** Change Directory (folder change karna)  
**Command:**
```bash
cd Documents
```

🟢 Urdu: Ye command aapko kisi aur folder ke andar le jaati hai.

---

### 4. `mkdir`  
**Purpose:** Make a new folder  
**Command:**
```bash
mkdir myFolder
```

🟢 Urdu: Ye command ek naya folder banata hai jiska naam `myFolder` hoga.

---

### 5. `touch`  
**Purpose:** Create a new empty file  
**Command:**
```bash
touch file.txt
```

🟢 Urdu: Ye command ek nayi file banati hai (khaali file).

---

### 6. `rm`  
**Purpose:** Delete file or folder  
**Command:**
```bash
rm file.txt        # File delete karein  
rm -r myFolder     # Folder delete karein (with -r = recursive)
```

🟢 Urdu: Ye command file ya folder delete karne ke liye use hoti hai.

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
| Command | Urdu Meaning           | Use                            |
|---------|------------------------|---------------------------------|
| `pwd`   | Current folder dikhana | Show current directory         |
| `ls`    | Files dikhana          | List files in current folder   |
| `cd`    | Folder change karna    | Change directory               |
| `mkdir` | Naya folder banana     | Make new directory             |
| `touch` | Nayi file banana       | Create empty file              |
| `rm`    | Delete karna           | Remove file/folder             |

---

