'use client';
import React, { useState } from "react";

function Page() {
  const [task, setTask] = useState("");
  const [desc, setdesc] = useState("");
  const [maintask, setmaintask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (task.trim() === "" || desc.trim() === "") {
      alert("⚠️ Please fill in both Task and Description!");
      return;
    }

    setmaintask([...maintask, { task, desc }]);
    setTask("");
    setdesc("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...maintask];
    copyTask.splice(i, 1);
    setmaintask(copyTask);
  };

  let renderTask = (
    <h1 className="font-semibold text-center text-white text-xl animate-pulse">
      📭 No Task Available — Add Something Cool!
    </h1>
  );

  if (maintask.length > 0) {
    renderTask = maintask.map((t, i) => {
      return (
        <li
          key={i}
          className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-4 m-4 shadow-md transition hover:scale-[1.02] hover:shadow-lg flex flex-col sm:flex-row sm:justify-between items-start sm:items-center"
        >
          <div>
            <h4 className="text-white text-xl sm:text-2xl font-bold mb-1">
              📝 {t.task}
            </h4>
            <p className="text-white/80 text-md sm:text-lg">📌 {t.desc}</p>
          </div>
          <button
            className="mt-4 sm:mt-0 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition cursor-pointer"
            onClick={() => deleteHandler(i)}
          >
            ❌ Delete
          </button>
        </li>
      );
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans px-4 py-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
        My Todo App 
      </h1>

      <form
        className="max-w-xl mx-auto flex flex-col gap-6 bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-lg"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          placeholder="📝 Enter Task here"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <input
          type="text"
          className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="📋 Enter Description here"
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
        />

        <button
          type="submit"
          disabled={task.trim() === "" || desc.trim() === ""}
          className={`py-3 rounded-xl font-bold transition text-lg ${
            task.trim() === "" || desc.trim() === ""
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
          }`}
        >
          ➕ Add Task
        </button>
      </form>

      <div className="mt-10 max-w-3xl mx-auto">
        <ul>{renderTask}</ul>
      </div>
    </div>
  );
}

export default Page;
