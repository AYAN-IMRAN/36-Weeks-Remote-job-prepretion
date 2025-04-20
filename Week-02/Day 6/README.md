

## 🚀 **What is Git & GitHub?**

- **Git** is a **version control system** – it tracks your code and its changes over time.
- **GitHub** is a **cloud platform** to host your Git repositories and collaborate with others.

---

## 🛠️ **Git Installation**

Install Git from: [https://git-scm.com](https://git-scm.com)

After installing, verify with:

```bash
git --version
```

---

## ⚙️ **Git Configuration (Very Important)**

Set your user info (only once):

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

View your configuration:

```bash
git config --list
```

Edit global config:

```bash
git config --global -e
```

🧠 _Tip: Ye step zaroori hai warna Git ko pata nahi chalega ke commits kisne kiye._

---

## 🗂️ **Making a Folder a Git Project**

Initialize Git in your folder:

```bash
git init
```

Now your folder is a **Git repository**.

---

## 📶 **Git File Stages Explained Simply**

### File States:

1. **Untracked (U)**  
   Git doesn't know this file exists yet.  
   _“File ko Git abhi track nahi kar raha.”_

2. **Staged (A)**  
   File is added, ready to be committed.  
   _“File Git ke pass hai, ready to save.”_

3. **Committed (C)**  
   File is saved permanently in Git history.  
   _“Ab file track ho gayi aur Git ke records me hai.”_

---

## 🔁 **Git Commands Flow**

### 1. Check status:
```bash
git status
```

### 2. Add file to staging:
```bash
git add filename
# OR add all:
git add .
```

### 3. Commit your changes:
```bash
git commit -m "Your message"
```

---

## 🧾 **Check History**

View commit logs:
```bash
git log
```

Short version:
```bash
git log --oneline
```

Graphical view:
```bash
git log --oneline --graph
```

🧠 _Tip: Ye commands help karti hain aapko track rakhne me ke aap ne kya-kya change kiya kab._

---

## 🛑 **Reset Commands (Undo Changes)**

### Reset to previous commit:
```bash
git reset --hard HEAD~1
```

_“Ek step peeche chale jao, jaise undo.”_

---

## 🌿 **Working with Branches**

Create and switch to a new branch:
```bash
git switch -C new-branch
```

Check all branches:
```bash
git branch
```

Merge branches into main:
```bash
git merge branch-name
```

🧠 **Merge Types:**
1. **Fast-forward merge** – simple merge if no conflict.
2. **3-way merge** – if both branches had different changes.
3. **Recursive merge** – for complex scenarios.

---

## 🗃️ **Stashing (Save Unfinished Work Temporarily)**

### Save your work:
```bash
git stash
```

### Bring it back:
```bash
git stash apply
```

### Delete all stashed:
```bash
git stash clear
```

_“Temporary draft samajh lo – na delete hoti na add hoti.”_

---

## 🌐 **GitHub Collaboration (Team Work)**

### Add remote GitHub repo:
```bash
git remote add origin https://github.com/user/repo.git
```

### Push code to GitHub:
```bash
git push -u origin main
```

If on a different branch:
```bash
git push -u origin branch-name
```

---

## 🤝 **Second User / Team Member Commands**

First fetch latest data:
```bash
git fetch
```

Then merge it:
```bash
git merge origin/main
```

OR just pull (fetch + merge in one):
```bash
git pull
```

---

## ✅ Summary Cheatsheet:

| Command | Use |
|--------|------|
| `git init` | Start Git in a folder |
| `git add .` | Stage all changes |
| `git commit -m ""` | Save with message |
| `git status` | Check file states |
| `git log` | Show commit history |
| `git reset --hard HEAD~1` | Undo last commit |
| `git stash` | Save draft |
| `git push origin main` | Upload code to GitHub |
| `git pull` | Download changes from GitHub |

---

## 📚 Learn Git Like a Story:

Imagine Git as a **notebook** 📒:
- You write drafts (Untracked),
- You mark it for finalization (Staged),
- Then you publish (Commit),
- You can go back in time (Reset),
- And share with friends (GitHub Push).



# 🧠 **Git & GitHub Cheatsheet**  
✨ _All essential commands with explanation_

---

## 🛠️ **Setup (One-time)**

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --list           # Show current config
git config --global -e      # Edit global config
```
🗣️ _Git ko batate ho ke commits kis user ne kiye._

---

## 🚀 **Starting a New Project**

```bash
git init                    # Initialize Git in a folder
git clone <repo-URL>       # Copy repo from GitHub
```
🗣️ _`init` local project start karta hai, `clone` GitHub se copy karta hai._

---

## 🔍 **Checking Status & History**

```bash
git status                 # See file stages (U, M, etc.)
git log                    # Full commit history
git log --oneline          # Short version
git log --oneline --graph  # Tree structure of commits
```

---

## 🔄 **Staging and Committing**

```bash
git add filename           # Stage specific file
git add .                  # Stage all files
git commit -m "Message"    # Commit with message
```
🗣️ _`add` file ko staging area me laata hai, `commit` usko Git me save karta hai._

---

## 🔄 **Reset (Undo Changes)**

```bash
git reset HEAD filename         # Unstage a file
git reset --soft HEAD~1         # Undo last commit (keep changes)
git reset --mixed HEAD~1        # Undo commit + unstage
git reset --hard HEAD~1         # Completely undo + delete changes
```

🧠 _HEAD~1 means 1 commit back._

---

## 🌿 **Branches**

```bash
git branch                    # List branches
git branch new-branch         # Create branch
git switch new-branch         # Switch to branch
git switch -C branch-name     # Create + switch
```

🗣️ _Branch: Project ka alternate version. Testing or new feature ke liye._

---

## 🔀 **Merging Branches**

```bash
git merge branch-name         # Merge branch into current one
```

🧠 **Merge Types:**
- **Fast-forward**: Straight merge
- **3-way**: Common in diverged branches

---

## 📦 **Stashing (Save Work Temporarily)**

```bash
git stash                     # Save current changes
git stash apply               # Apply stashed changes
git stash clear               # Remove all stashes
```
🗣️ _Temporary draft jese, na commit hota na delete._

---

## 📤 **Push to GitHub**

```bash
git remote add origin <URL>   # Link local repo to GitHub
git push -u origin main       # Push main branch
git push                      # Push changes
```

---

## 📥 **Pull / Fetch Changes**

```bash
git fetch                     # Fetch from GitHub (not merge)
git pull                      # Fetch + merge changes
```

🗣️ _Pull = Update project from GitHub_

---

## 🤝 **Collaborating**

### First time:

```bash
git clone <repo-url>
```

### Regular:

```bash
git pull                 # Get latest updates
git add .
git commit -m "update"
git push
```

---

## 🔐 **Helpful Shortcuts**

| Command                     | Meaning |
|----------------------------|---------|
| `git init`                 | Start Git repo |
| `git status`               | Check file status |
| `git add .`                | Stage all changes |
| `git commit -m "msg"`     | Commit with message |
| `git log`                  | Show history |
| `git reset --hard HEAD~1` | Undo last commit |
| `git switch branch`        | Change branch |
| `git stash`                | Save temp work |
| `git push`                 | Upload to GitHub |
| `git pull`                 | Download updates |

---



## 📝 **Pro Tip**  
"Jab bhi commit karo, clear message likho — future me samajh aaye ke kiya kiya tha."
