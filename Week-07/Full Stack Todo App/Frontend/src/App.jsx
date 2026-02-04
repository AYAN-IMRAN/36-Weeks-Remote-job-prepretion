import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { TodoContext } from '../context/TodoContext'

const API = "http://localhost:3000/api/todos" // ⭐ base URL (pro way)

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState("")

  // =========================
  // GET ALL TODOS
  // =========================
  async function getTodos() {
    try {
      const response = await axios.get(API)
      setTodos(response.data.todos)
    } catch (err) {
      console.log("Error fetching todos:", err)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])

  // =========================
  // CREATE TODO
  // =========================
  async function handleCreate() {
    if (!inputValue.trim()) return

    try {
      await axios.post(API, {
        text: inputValue
      })

      setInputValue("")
      getTodos()
    } catch (err) {
      console.log("Create error:", err)
    }
  }

  // =========================
  // UPDATE TODO
  // =========================
  async function handleUpdate(id) {
    try {
      await axios.put(`${API}/${id}`)
      getTodos()
    } catch (err) {
      console.log("Update error:", err)
    }
  }

  // =========================
  // DELETE TODO
  // =========================
  async function handleDelete(id) {
    try {
      await axios.delete(`${API}/${id}`)
      getTodos()
    } catch (err) {
      console.log("Delete error:", err)
    }
  }

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>

      <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black flex items-center justify-center px-4 py-8">

        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-5 sm:p-8 space-y-6">

          <h1 className="text-2xl sm:text-3xl font-bold text-white text-center tracking-wide">
            ✨ My Tasks
          </h1>

          {/* Input */}
          <div className="flex flex-col sm:flex-row gap-3">

            <input
              type="text"
              value={inputValue}
              placeholder="Add something awesome..."
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full flex-1 bg-zinc-800/70 text-white px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              onClick={handleCreate}
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Add
            </button>
          </div>

          {/* Todos List */}
          <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">

            {todos.map((todo) => (
              <div
                key={todo._id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-zinc-900/70 border border-zinc-800 px-4 py-3 rounded-xl"
              >

                <span
                  className={`text-white break-words ${
                    todo.completed ? "line-through text-zinc-500" : ""
                  }`}
                >
                  {todo.text}
                </span>

                <div className="flex gap-2">

                  <button
                    onClick={() => handleUpdate(todo._id)}
                    className="bg-emerald-600/80 hover:bg-emerald-600 px-3 py-2 rounded-lg text-white text-sm"
                  >
                    {todo.completed ? "✓ Done" : "Mark"}
                  </button>

                  <button
                    onClick={() => handleDelete(todo._id)}
                    className="bg-rose-600/80 hover:bg-rose-600 px-3 py-2 rounded-lg text-white text-sm"
                  >
                    Delete
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>

    </TodoContext.Provider>
  )
}

export default App
