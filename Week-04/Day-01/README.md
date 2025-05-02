 

# 📘 **DOM in JavaScript – Week 4 Day 01**

---

## 🧠 **What is DOM? (Document Object Model)**

**Definition (Simple):**

> DOM ek tareeka hai jiske zariye JavaScript aapke HTML page ko samajh sakti hai, change kar sakti hai, aur uss par action le sakti hai. Yeh ek tree structure hota hai jo page ke har element ko object bana deta hai.

*Explanation:**  
DOM ek **"web page ka naqsha"** hota hai jisko JavaScript read (parh) aur update (tabdeel) kar sakti hai. Socho ke HTML ek **ped** (tree) hai jisme headings, paragraphs, images sab branches ki tarah hain.

---

## 🔑 **4 Pillars of DOM Manipulation**

| Pillar | Element Work | Description |
|--------|------------------------|-------------|
| 1️⃣ Element Selection | Element ko chunna | Page se kisi HTML tag ko dhoondhna |
| 2️⃣ Changing HTML | HTML ko tabdeel karna | Text ya structure change karna |
| 3️⃣ Changing CSS | CSS ko tabdeel karna | Style change karna page ka |
| 4️⃣ Event Listeners | User action sun'na | Jab user click ya koi aur action kare |

---

## 📌 **1. Selecting an Element (Element chunnay ka tareeqa)**

JavaScript mein element ko select karne ke kuch tareeqay:

```js
document.getElementById("idName")
document.querySelector(".className")
document.querySelectorAll("tagName")
```

### ✅ Example:
```html
<h1 id="title">Welcome</h1>
<script>
  let heading = document.getElementById("title");
  console.log(heading); // <h1 id="title">Welcome</h1>
</script>
```

---

## 📌 **2. Changing HTML (innerHTML vs textContent)**

Jab element mil jaye, to uska content bhi change kar sakte ho.

```js
element.innerHTML = "<b>New Content</b>";  // HTML bhi chalega
element.textContent = "Just Text";         // Sirf plain text
```

### ❗Farq:
| innerHTML | textContent |
|-----------|-------------|
| HTML tags ko bhi samajhta hai | Sirf text dikhata hai |
| User input ke liye unsafe ho sakta hai | Zyada secure hai |

### 🧪 Example:
```js
heading.innerHTML = "<i>Changed!</i>"; // italic hoga
heading.textContent = "<i>Changed!</i>"; // tags dikhaye ga text mein
```

---

## 📌 **3. Changing CSS through JavaScript**

Style bhi change kar sakte ho JS se:

```js
element.style.color = "red";
element.style.backgroundColor = "yellow";
```

### 🧪 Example:
```js
heading.style.fontSize = "40px";
```

---

## 📌 **4. Event Listeners (User actions handle karna)**

Event Listener wo function hota hai jo user ke kisi action ka intezar karta hai, jaise click, type, scroll, etc.

```js
element.addEventListener("click", function() {
  alert("You clicked me!");
});
```

---

## 💡 **Simple Bulb Example** 💡

```html
<button id="btn">Toggle Bulb</button>
<div id="bulb" style="width:100px; height:100px; background:gray;"></div>

<script>
  let btn = document.getElementById("btn");
  let bulb = document.getElementById("bulb");

  btn.addEventListener("click", function() {
    if (bulb.style.background === "yellow") {
      bulb.style.background = "gray";
    } else {
      bulb.style.background = "yellow";
    }
  });
</script>
```

✅ **Concepts:**
- Selection
- Event Listener
- CSS Change

---

## 🔁 **Multiple Events Example**

```js
element.addEventListener("mouseover", hoverFunction);
element.addEventListener("dblclick", doubleClickFunction);
```

Har event ka alag action ho sakta hai.

---

## 🧩 **Selecting Multiple Elements**

```js
let allItems = document.querySelectorAll(".item");
allItems.forEach(function(item){
  item.style.color = "blue";
});
```

### ✅ Use Case:
List items ya buttons sab ka color ek hi waqt mein change karna.

---

## 🧠 **Advanced DOM Concepts**

| Feature | Kaam |
|--------|------|
| `classList.add("className")` | Class add karna |
| `classList.remove("className")` | Class hataana |
| `setAttribute("attr", "value")` | Attribute lagana |
| `parentElement`, `children`, `nextElementSibling` | DOM tree navigate karna |

---

## ⚙️ **Common Events (Jo aapko yaad rakhne hain)**

| Event Type | Function | Description |
|------------|------------|-------------|
| click | click karna | Jab user click kare |
| mouseover | mouse le jana | Jab mouse kisi cheez ke upar ho |
| keyup / keydown | key press karna | Jab user keyboard se kuch likhe |
| submit | form bhejna | Jab form submit ho |
| change | value tabdeel karna | Jab input box ki value change ho |

---

## 📝 **Summary**

- DOM se JS HTML ko control karta hai.
- 4 main actions: **select, change HTML, change CSS, events handle karna**.
- `innerHTML` aur `textContent` ka farq samajhna zaroori hai.
- Loops se multiple elements ko ek sath handle karna seekho.

---

