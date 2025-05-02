## ✅ Week 4 - Day 2: **React JS Coding + Interview Prep**

---

### 🔹 **What is React?**

**React** is a **JavaScript library** used to build user interfaces, especially **single-page applications (SPAs)**.

- React helps you build UI components that can **update dynamically** when data changes.

📌 **Note:**  
"React aik library hai jo front-end efficiently build karne ke liye use hoti hai."

---

### 🔹 **Why Use React?**

- Lightweight and fast
- Reusable components
- Easy to manage state and data
- Powerful with large-scale apps

📌 **Note:**  
"Jab apko aisi app banani ho jisme multiple features aur reusable parts hon, React best choice hai."

---

### 🔹 **How Does React Work?**

- You **create components**
- You **manage data using state**
- React **re-renders UI automatically** when data (state) changes




🔸 1. **Static vs Dynamic Website** 
You haven't discussed this directly. It's foundational and explains *why React is useful*.



### 🔹 **Static vs Dynamic Website**

- **Static Website**: Shows the same content to every visitor. No user interaction or real-time updates.
- **Dynamic Website**: Changes content based on user interaction, database updates, etc.

📌 **Note:**  
"Static websites sirf fixed HTML pages hoti hain. Dynamic websites user input aur data ke mutabiq update hoti hain."

React helps build **dynamic websites** easily.


🔸 2. **Why React Came** 
Though partially covered under “Why Use React,” it's not detailed.




### 🔹 **Why React Came?**

- Earlier websites used vanilla JavaScript or jQuery – difficult to manage for big apps.
- No clear structure, repeated code, hard DOM manipulation.
- React came to:
  - Make UI building simpler
  - Manage data & UI efficiently
  - Promote component reuse

📌 **Note:**  
"React ne manual DOM update aur jQuery ke mushkil code ko replace kiya with reusable components aur efficient updates."




3. **What Problem React Solves** 
This overlaps with the point above, but you should **add a dedicated section**.


### 🔹 **What Problems Does React Solve?**

- **Manual DOM manipulation is hard** – React uses a **Virtual DOM**
- **Repetitive code** – React promotes **components**
- **Poor performance in updates** – React efficiently updates only changed parts
- **Hard to manage data** – React provides state management (e.g., `useState`)

📌 **Note:**  
"React ka Virtual DOM fast aur efficient UI update karta hai bina pura page reload kiye."


🔹 **What is Re-rendering in React?

- When state or props change, React automatically **re-renders** the affected component.
- This makes the UI **stay updated with the latest data**.

```jsx
const [count, setCount] = useState(0);
// Updating count triggers re-render
```

📌 **Note:**  
"React component dubara render hota hai jab uska state ya props change hota hai – is process ko re-rendering kehte hain."



🔹How to Set Up React (using Vite)

#### ⚡ Vite is a fast alternative to `create-react-app`.

1. Open terminal and run:

```bash
npm create vite@latest
```

2. Choose **React** and **JavaScript**
3. Go to project folder:

```bash
cd your-project-name
```

4. Install dependencies:

```bash
npm install
```

5. Run the app:

```bash
npm run dev
```

📌 **Note:**  
"Vite React ka fast version hai jo development fast karta hai."

---

### 🔹 **Understanding React Project Structure**

- `main.jsx` → Entry point (React app yahan mount hoti hai)
- `App.jsx` → Main component of the app

🧹 **Clean `App.jsx` file:**

```jsx
import React from 'react'

function App() {
  return (
    <div>
      <h1>Hello React</h1>
    </div>
  )
}

export default App
```

---

### 🔹 **What is JSX?**

JSX allows you to write **HTML-like code inside JavaScript**.

```jsx
<h1>{2 + 2}</h1>  // Output: 4
```

In HTML:

```html
<h1>2 + 2</h1>  // Output: "2 + 2"
```

📌 **Note:**  
"JSX JavaScript aur HTML ka mix hota hai. JSX mein `{}` ka use karke JS expressions likh sakte hain."

---

### 🔹 **JSX Rules**

JSX must return **only one parent element**.

❌ Wrong:

```jsx
return (
  <h1>Hello</h1>
  <h2>World</h2>
)
```

✅ Right:

```jsx
return (
  <div>
    <h1>Hello</h1>
    <h2>World</h2>
  </div>
)
```

or

```jsx
return (
  <>
    <h1>Hello</h1>
    <h2>World</h2>
  </>
) // This is called React Fragment
```

📌 **Note:**  
"Return ke andar sirf aik parent allowed hai. Agar 2 cheezain return karni hoon to Fragment (`<> </>`) ya parent div use karo."

---

### 🔹 **Styling in React (3 Ways)**

1. **CSS Modules** – scoped CSS
2. **Tailwind CSS** – utility-first CSS
3. **Material UI** – pre-built styled components

📌 **Note:**  
"Ap React main CSS 3 tareeqon se kar sakte ho – local module, Tailwind, ya ready-made Material UI."

---

### 🔹 **Creating and Using Components**

**Create Component:**

```jsx
// Product.jsx
function Product() {
  return <h2>This is Product Component</h2>
}
export default Product;
```

**Use Component:**

```jsx
import Product from './Product'

function App() {
  return (
    <>
      <h1>My App</h1>
      <Product />
    </>
  )
}
```

📌 **Note:**  
"Component bana ke usko App main `import` kar ke use karte hain. Har component alag file main hona chahiye."

---

### 🔹 **Passing Data (Props)**

**Parent to Child component data send karne ke liye `props` use hotay hain.**

```jsx
// Product.jsx
function Product(props) {
  return <h2>{props.name}</h2>
}
```

```jsx
// App.jsx
<Product name="iPhone 15" />
```

📌 **Note:**  
"Props se data ek component se dosre component ko bhejte hain."

---

### 🔹 **Component’s Own Data (useState Hook)**

Use `useState` to manage component-level data.

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
```

📌 **Note:**  
"`useState` do cheezein deta hai: ek current value aur ek update karne ka function."

---

### 🔹 **Conditional Rendering (Ternary Operator)**

```jsx
const isLoggedIn = true;

return (
  <>
    {isLoggedIn ? <h1>Welcome Back</h1> : <h1>Please Log In</h1>}
  </>
)
```

📌 **Note:**  
"Condition ke basis pe different content dikhane ke liye ternary operator use hota hai."

---

### 🔚 Summary (Quick Recap)

| Topic             | Concept                                                                 |
|------------------|-------------------------------------------------------------------------|
| What is React     | JavaScript library for UI                                               |
| JSX               | JavaScript + HTML                                                      |
| Components        | Functions that return JSX                                              |
| useState          | For dynamic data in components                                         |
| Props             | Pass data from parent to child components                              |
| Conditional Render| Show/hide things based on conditions                                   |
| Styling           | CSS Module / Tailwind / Material UI                                    |
| Project Setup     | Use Vite for fast dev environment                                      |

---

