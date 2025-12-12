
---

## 📘 **Week 8.3: Axios and Fetch API in React**

---

### ✅ **Learning Objectives:**

1. Understand the difference between `fetch()` and `axios`.
2. Learn how to call an external API (like Lorem Picsum).
3. Display fetched data (images) in a beautiful layout using Tailwind CSS.
4. Understand how the code works step-by-step (dry run in English + Roman Urdu).

---

## 🔍 **What is an API?**

**API (Application Programming Interface)** is a way to get data from a server. For example, you can get photos, weather data, user profiles, etc.

---

## 🌐 **Two Popular Methods to Call API in React**

| Method    | Description                                                | Built-in or External |
| --------- | ---------------------------------------------------------- | -------------------- |
| `fetch()` | Native browser API for making network requests.            | Built-in             |
| `axios`   | Popular third-party library that simplifies HTTP requests. | External             |

---

## 1️⃣ **Using `fetch()` in React with Lorem Picsum**

### 📄 **Example: Fetch Random Images**

```jsx
// App.jsx
import React, { useEffect, useState } from "react";

const FetchExample = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=2&limit=8")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Fetch Error:", error));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gray-100">
      {images.map((img) => (
        <div key={img.id} className="rounded overflow-hidden shadow-lg">
          <img src={img.download_url} alt={img.author} className="w-full h-48 object-cover" />
          <div className="px-2 py-2 bg-white">
            <p className="text-sm font-semibold">By {img.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FetchExample;
```

---

### 🔁 **Dry Run**

1. **Step 1:** `useState([])` — We start with an empty list of images.
   *Yeh ek khaali list hai jahan hum images save karein gay.*

2. **Step 2:** `useEffect()` runs once when component mounts.
   *Jab page load hota hai, API call ki jati hai.*

3. **Step 3:** `fetch("https://picsum...")` sends a GET request.
   *Yeh server ko request bhejta hai 8 images ke liye.*

4. **Step 4:** `.then(res => res.json())` converts response to usable JSON.
   *Server se aayi data ko hum readable banate hain.*

5. **Step 5:** `setImages(data)` updates our state.
   *Jo photos mile, woh images list mein daal dete hain.*

6. **Step 6:** `images.map()` loops over the list and displays each image.
   *Har image ko ek card ke form mein dikhate hain.*

---

## 2️⃣ **Using `axios` in React with Lorem Picsum**

### ✅ **Step 1: Install axios**

```bash
npm install axios
```

### 📄 **Code Example with Axios**

```jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosExample = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list?page=1&limit=8")
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error("Axios Error:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gray-50">
      {images.map((img) => (
        <div key={img.id} className="rounded-lg overflow-hidden shadow-md">
          <img
            src={img.download_url}
            alt={img.author}
            className="w-full h-48 object-cover"
          />
          <div className="bg-white p-2">
            <p className="text-sm text-gray-800 font-medium">By {img.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AxiosExample;
```

---

### 🔁 **Dry Run**

1. **axios.get(...)** — Sends a GET request like `fetch`, but easier to read.
   *Yeh API ko request karta hai, aur result ko direct JSON deta hai.*

2. **setImages(response.data)** — Stores image list in state.
   *Jo images milti hain, unko hum state mein rakhte hain.*

3. **Tailwind CSS Layout** — Creates a responsive grid of image cards.
   *Yeh design Tailwind se banai gayi hai jo mobile aur desktop dono pe achi lagti hai.*

---

## 📌 **Fetch vs Axios: Quick Comparison**

| Feature             | Fetch                 | Axios                  |
| ------------------- | --------------------- | ---------------------- |
| Simpler Syntax      | ❌                     | ✅                      |
| Built-in in Browser | ✅                     | ❌ (needs installation) |
| Error Handling      | Manual `.catch()`     | Cleaner & built-in     |
| JSON Parsing        | Manual (`res.json()`) | Automatic              |
| Best for Beginners  | ✅                     | ✅✅                     |

---



